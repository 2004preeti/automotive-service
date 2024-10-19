// src/pages/CarValuation.js
import React from 'react';
import ValuationDetails from '../components/ValuationDetails';
import ValuationForm from '../components/ValuationForm';
import './CarValuation.css'; // Optional CSS

const CarValuation = () => {
  return (
    <div className="car-valuation">
      <ValuationDetails />
      <ValuationForm />
    </div>
  );
};

export default CarValuation;
