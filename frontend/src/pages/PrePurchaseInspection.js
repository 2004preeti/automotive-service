// src/pages/PrePurchaseInspection.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './PrePurchaseInspection.css';
const PrePurchaseInspection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    inspectionDate: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Your request has been submitted!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicleMake: '',
      vehicleModel: '',
      inspectionDate: '',
      comments: '',
    });
  };

  return (
    <div className="inspection-container">
      <h2>Pre-Purchase Inspection</h2>
      <p>
        Ensure your next car purchase is worry-free with our detailed inspection
        service. We inspect key components of the vehicle and provide a
        comprehensive report.
      </p>

      <form className="inspection-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="vehicleMake"
          placeholder="Vehicle Make"
          value={formData.vehicleMake}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="vehicleModel"
          placeholder="Vehicle Model"
          value={formData.vehicleModel}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="inspectionDate"
          value={formData.inspectionDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="comments"
          placeholder="Additional Comments"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
        ></textarea>
        <button type="submit">Submit Inspection Request</button>
      </form>
    </div>
  );
};

export default PrePurchaseInspection;
