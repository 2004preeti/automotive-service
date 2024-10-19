import React, { useState } from 'react';
import './CarForm.css';

const CarForm = ({ onAddCar }) => {
  const [carName, setCarName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageCount, setImageCount] = useState(0);
  const [modernYear, setModernYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!carName || !imageUrl || !imageCount || !modernYear) {
      alert('Please fill in all fields.');
      return;
    }

    const newCar = {
      name: carName,
      imageUrl: imageUrl,
      imageCount: parseInt(imageCount, 10),
      modernYear: parseInt(modernYear, 10),
    };

    onAddCar(newCar); // Call the function to add the new car
    resetForm();
  };

  const resetForm = () => {
    setCarName('');
    setImageUrl('');
    setImageCount(0);
    setModernYear('');
  };

  return (
    <form onSubmit={handleSubmit} className="car-form">
      <h2>Add a New Car</h2>
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
        <label>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image Count:</label>
        <input
          type="number"
          value={imageCount}
          onChange={(e) => setImageCount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Modern Year:</label>
        <input
          type="number"
          value={modernYear}
          onChange={(e) => setModernYear(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
