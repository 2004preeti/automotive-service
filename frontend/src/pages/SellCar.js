import React, { useState } from 'react';
import './SellCar.css'; // Import the CSS for the form

const SellYourCar = () => {
  const [carName, setCarName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!carName || !price || !description || !contactInfo) {
      alert('Please fill in all fields.');
      return;
    }

    // Here you would typically send the form data to your server
    console.log({
      carName,
      price,
      description,
      contactInfo,
    });

    // Reset form fields
    resetForm();
  };

  const resetForm = () => {
    setCarName('');
    setPrice('');
    setDescription('');
    setContactInfo('');
  };

  return (
    <div className="sell-your-car">
      <h2 className="car">Sell Your Car</h2>
      <p>Follow the instructions below to sell your car:</p>
      <ol>
        <li>Fill in the details about your car.</li>
        <li>Provide a fair price based on market value.</li>
        <li>Write a detailed description highlighting key features.</li>
        <li>Enter your contact information so buyers can reach you.</li>
      </ol>

      <form onSubmit={handleSubmit} className="car-form">
        <h2>Car Details</h2>
        <div>
          <label>Car Name:</label>
          <input
            type="text"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact Information:</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellYourCar;
