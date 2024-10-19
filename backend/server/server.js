const express = require('express');
const db = require('./db');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = 'your-secret-key'; // Replace with your own secret

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  debugger;

  console.log('Received registration data:', { username, email });

  db.query(
    'SELECT * FROM user WHERE username = ? OR email = ?',
    [username, email],
    async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error' });
      }

      if (results.length > 0) {
        console.log('User or email already exists');
        return res
          .status(400)
          .json({ message: 'User or Email already exists' });
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query(
          'INSERT INTO user (username, email, password) VALUES (?, ?, ?)',
          [username, email, hashedPassword],
          (err) => {
            if (err) {
              console.error('Insert error:', err);
              return res.status(500).json({ message: 'Registration failed' });
            }
            console.log('User registered successfully');
            res.status(201).json({ message: 'User registered successfully' });
          }
        );
      } catch (hashError) {
        console.error('Password hashing error:', hashError);
        res.status(500).json({ message: 'Registration failed' });
      }
    }
  );
});

// Login User
app.post('/login', (req, res) => {
  debugger;
  const { email, password } = req.body;
  db.query(
    'SELECT * FROM user WHERE email = ?',
    [email],
    async (err, results) => {
      if (err || results.length === 0)
        return res.status(401).json({ message: 'Invalid credentials' });

      const user = results[0];
      debugger;
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid)
        return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    }
  );
});

// Start Server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
