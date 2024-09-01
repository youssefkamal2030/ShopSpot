// src/ShippingForm.js
import React, { useState } from 'react';

const ShippingForm = ({ onShippingSubmit }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onShippingSubmit(shippingInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shipping Information</h2>
      <input type="text" name="name" placeholder="Name" value={shippingInfo.name} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={shippingInfo.address} onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" value={shippingInfo.city} onChange={handleChange} required />
      <input type="text" name="state" placeholder="State" value={shippingInfo.state} onChange={handleChange} required />
      <input type="text" name="postalCode" placeholder="Postal Code" value={shippingInfo.postalCode} onChange={handleChange} required />
      <button type="submit">Continue to Payment</button>
    </form>
  );
};

export default ShippingForm;
