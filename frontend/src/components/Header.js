import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">
      Home
    </Link>{' '}
    {/* Home outside dropdown */}
    <Link to="/Login" className="nav-link-1">
      Login
    </Link>{' '}
    {/* Login outside dropdown */}
    <div className="dropdown">
      <button className="dropdown-btn">Services</button>
      <div className="dropdown-content">
        <Link to="/pre-purchase-inspection">Pre-purchase Inspection</Link>
        <Link to="/car-insurance">Car Insurance</Link>
        <Link to="/Sell-your-car">Sell Your Car</Link>
        <Link to="/car-valuation">Car Valuation</Link>
        <Link to="/key-duplication">Key Duplication</Link>
        <Link to="/my-garage">My Garage</Link>
        <Link to="/concierge-service">Concierge</Link>
      </div>
    </div>
  </nav>
);

export default Header;
