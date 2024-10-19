// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Optional CSS styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    console.log('Form Data Submitted:', formData);
    // Add logic to handle form submission (e.g., API call)
    alert('Thank you! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us for Personalized Assistance</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
