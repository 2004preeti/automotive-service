// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // CSS for styles
import carImage from '../images/car.jpg'; // Ensure this path is correct

const Home = () => (
  <div className="home">
    <h1 className="g">My Garage</h1>
    <img src={carImage} alt="Car" width="60%" height="60%" />
  </div>
);

export default Home;
