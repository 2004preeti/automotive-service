// src/components/CarList.js
import React from 'react';
import './CarList.css'; // Optional CSS for styling

const CarList = ({ cars }) => {
  if (cars.length === 0) {
    return <p>No cars listed yet. Use the form to add a car!</p>;
  }

  return (
    <div className="car-list">
      {cars.map((car, index) => (
        <div className="car-item" key={index}>
          <img src={car.imageUrl} alt={car.name} />
          <h3>{car.name}</h3>
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
        </div>
      ))}
    </div>
  );
};

export default CarList;
