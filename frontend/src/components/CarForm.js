// src/components/CarForm.js
import React, { useState } from 'react';

const CarForm = ({ addCar }) => {
  const [formData, setFormData] = useState({
    name: '',
    make: '',
    model: '',
    year: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(formData); // Call the parent function to add the car
    setFormData({ name: '', make: '', model: '', year: '', imageUrl: '' }); // Reset the form
  };

  return (
    <form className="car-form" onSubmit={handleSubmit}>
      <h2>List Your Car</h2>

      <label htmlFor="name">Car Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="make">Make:</label>
      <input
        type="text"
        id="make"
        name="make"
        value={formData.make}
        onChange={handleChange}
        required
      />

      <label htmlFor="model">Model:</label>
      <input
        type="text"
        id="model"
        name="model"
        value={formData.model}
        onChange={handleChange}
        required
      />

      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        name="year"
        value={formData.year}
        onChange={handleChange}
        required
      />

      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="url"
        id="imageUrl"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
      />

      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
