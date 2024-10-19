// src/components/ValuationDetails.js
import React from 'react';
import './ValuationDetails.css'; // Optional CSS

const ValuationDetails = () => {
  return (
    <div className="valuation-details">
      <h2>Car Valuation Service</h2>
      <p>
        Our car valuation service provides an accurate estimate of your car’s
        market value. Simply enter the details of your vehicle, and we’ll offer
        you the best possible valuation.
      </p>
      <ul>
        <li>Instant car value estimation</li>
        <li>Free of charge</li>
        <li>Accurate market trends and comparisons</li>
        <li>Personalized for your car’s model and condition</li>
      </ul>
      <p>
        Get started by filling in the form below to find out your car's worth!
      </p>
    </div>
  );
};

export default ValuationDetails;
