// export default MyGarage;
import React, { useState } from 'react';
import CarData from '../Data/CarData';
import CarForm from './CarForm';
import './MyGarage.css';

const MyGarage = () => {
  const [cars, setCars] = useState(CarData);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleBackClick = () => {
    setSelectedCar(null);
  };

  const addCar = (car) => {
    setCars((prevCars) => [...prevCars, car]);
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    setSelectedCar(null);
  };

  return (
    <div className="my-garage">
      <h1 className="garage">My Garage</h1>
      <button onClick={toggleForm} className="toggle-form-button">
        {showForm ? 'Back to Garage' : 'Add New Car'}
      </button>

      {showForm ? (
        <CarForm onAddCar={addCar} /> // Show the form
      ) : (
        <>
          {selectedCar ? (
            <div className="car-detail">
              <button onClick={handleBackClick} className="back-button">
                Back to Garage
              </button>
              <h2>{selectedCar.name}</h2>
              <img
                src={selectedCar.imageUrl}
                alt={selectedCar.name}
                className="car-image fixed-size"
              />
              <p>Image Count: {selectedCar.imageCount}</p>
              <p>Modern Year: {selectedCar.modernYear}</p>
            </div>
          ) : (
            <div className="car-list">
              {cars.map((car, index) => (
                <div
                  key={index}
                  className="car-card"
                  onClick={() => handleCarClick(car)}
                >
                  <img
                    src={car.imageUrl}
                    alt={car.name}
                    className="car-image"
                  />
                  <h2>{car.name}</h2>
                  <p>Price: {car.Price}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyGarage;
