import React, { useState } from 'react';
import './ShippingForm.css'; 
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
    <form className="shipping-form" onSubmit={handleSubmit}>
      <h2 className="shipping-form__title">Shipping Information</h2>
      <div className="shipping-form__input-group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={shippingInfo.name}
          onChange={handleChange}
          required
          className="shipping-form__input"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleChange}
          required
          className="shipping-form__input"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleChange}
          required
          className="shipping-form__input"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingInfo.state}
          onChange={handleChange}
          required
          className="shipping-form__input"
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={shippingInfo.postalCode}
          onChange={handleChange}
          required
          className="shipping-form__input"
        />
      </div>
      <button type="submit" className="shipping-form__button">Continue to Payment</button>
    </form>
  );
};

export default ShippingForm;
