import React, { useState } from 'react';
import './CarInsurance.css'; // Optional styling

const CarInsurance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    insuranceType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Insurance Request:', formData);
    alert('Your insurance request has been submitted!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      insuranceType: '',
    });
  };

  return (
    <div className="insurance-container">
      <h2>Get Car Insurance</h2>
      <p>
        Secure your vehicle with the right insurance coverage. Get a
        personalized quote today!
      </p>

      <form className="insurance-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="vehicleMake"
          placeholder="Vehicle Make"
          value={formData.vehicleMake}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="vehicleModel"
          placeholder="Vehicle Model"
          value={formData.vehicleModel}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="vehicleYear"
          placeholder="Vehicle Year"
          value={formData.vehicleYear}
          onChange={handleChange}
          required
        />
        <select
          name="insuranceType"
          value={formData.insuranceType}
          onChange={handleChange}
          required
        >
          <option value="">Select Insurance Type</option>
          <option value="Comprehensive">Comprehensive</option>
          <option value="Third-Party">Third-Party</option>
          <option value="Collision">Collision</option>
        </select>
        <button type="submit">Submit Insurance Request</button>
      </form>
    </div>
  );
};

export default CarInsurance;
