// src/pages/ConciergeService.js
import React from 'react';
import ConciergeDetails from '../components/ConciergeDetails';
import ContactForm from '../components/ContactForm';
import './ConciergeService.css'; // Optional CSS styling

const ConciergeService = () => {
  return (
    <div className="concierge-service">
      <ConciergeDetails />
      <ContactForm />
    </div>
  );
};

export default ConciergeService;
