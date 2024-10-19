// src/components/ConciergeDetails.js
import React from 'react';
import './ConciergeDetails.css'; // Optional CSS styling

const ConciergeDetails = () => {
  return (
    <div className="details-container">
      <h2>Concierge Service</h2>
      <p>
        Our concierge service offers personalized assistance to make your
        experience exceptional. Whether you need travel bookings, reservations,
        or tailored recommendations, we are here to help!
      </p>
      <ul>
        <li>Travel Planning & Bookings</li>
        <li>Restaurant & Hotel Reservations</li>
        <li>Event Tickets & VIP Access</li>
        <li>Personal Shopping Assistance</li>
      </ul>
      <p>
        Let us take care of the details, so you can focus on what matters most.
      </p>
    </div>
  );
};

export default ConciergeDetails;
