// src/components/ValuationForm.js
import React, { useState } from 'react';
import './ValuationForm.css'; // Optional CSS

const ValuationForm = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: 'Excellent',
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
    console.log('Valuation Request Submitted:', formData);
    // Add API call logic here if needed
    alert('Your car valuation request has been submitted!');
    setFormData({
      make: '',
      model: '',
      year: '',
      mileage: '',
      condition: 'Excellent',
    });
  };

  return (
    <form className="valuation-form" onSubmit={handleSubmit}>
      <h2>Get Your Car Valuation</h2>

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

      <label htmlFor="mileage">Mileage (in km):</label>
      <input
        type="number"
        id="mileage"
        name="mileage"
        value={formData.mileage}
        onChange={handleChange}
        required
      />

      <label htmlFor="condition">Condition:</label>
      <select
        id="condition"
        name="condition"
        value={formData.condition}
        onChange={handleChange}
      >
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
        <option value="Poor">Poor</option>
      </select>

      <button type="submit">Get Valuation</button>
    </form>
  );
};

export default ValuationForm;
