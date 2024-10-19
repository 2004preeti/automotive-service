// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrePurchaseInspection from './pages/PrePurchaseInspection';
import CarInsurance from './pages/CarInsurance';
import CarValuation from './pages/CarValuation';
import KeyDuplication from './pages/KeyDuplication';
import ConciergeService from './pages/ConciergeService';
import Header from './components/Header';
import PaymentMethod from './components/PaymentMethod';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import SellCar from './pages/SellCar';
import Login from './pages/Login';
import Register from './pages/Register';
import MyGarage from './pages/MyGarage';

// Import Google Fonts
const link1 = document.createElement('link');
link1.rel = 'preconnect';
link1.href = 'https://fonts.googleapis.com';
document.head.appendChild(link1);

const link2 = document.createElement('link');
link2.rel = 'preconnect';
link2.href = 'https://fonts.gstatic.com';
link2.crossOrigin = 'anonymous';
document.head.appendChild(link2);

const link3 = document.createElement('link');
link3.rel = 'stylesheet';
link3.href =
  'https://fonts.googleapis.com/css2?family=Londrina+Sketch&display=swap';
document.head.appendChild(link3);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pre-purchase-inspection"
          element={<PrePurchaseInspection />}
        />
        <Route path="/car-insurance" element={<CarInsurance />} />
        <Route path="/car-valuation" element={<CarValuation />} />
        <Route path="/key-duplication" element={<KeyDuplication />} />
        <Route path="/my-garage" element={<MyGarage />} />
        <Route path="/concierge-service" element={<ConciergeService />} />
        <Route path="/Sell-your-car" element={<SellCar />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
