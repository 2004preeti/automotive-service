// src/pages/KeyDuplication.js
import React, { useState } from 'react';
import './KeyDuplication.css';

const KeyDuplication = () => {
  const [formData, setFormData] = useState({
    keyType: '',
    quantity: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Key Duplication Request:', formData);
    alert('Your key duplication request has been submitted!'); // Temporary for demonstration
    setFormData({ keyType: '', quantity: '', contactInfo: '' }); // Reset form
  };

  return (
    <div className="key-duplication-container">
      <h2>Key Duplication Services</h2>
      <p>
        We offer professional key duplication services for various types of
        keys.
      </p>
      <h2>Request a Key Duplication</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type of Key:</label>
          <input
            type="text"
            name="keyType"
            value={formData.keyType}
            onChange={handleChange}
            required
            placeholder="Enter type of key (e.g., house, car)"
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            placeholder="Enter quantity"
          />
        </div>
        <div>
          <label>Contact Information:</label>
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
            placeholder="Enter your contact information"
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default KeyDuplication;
