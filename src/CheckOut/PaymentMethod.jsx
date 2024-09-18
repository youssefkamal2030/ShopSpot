import React, { useState } from 'react';
import './PaymentMethod.css'; // Import the CSS file

const PaymentMethod = ({ onPaymentSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentSubmit(paymentMethod);
  };

  return (
    <form className="payment-method-form" onSubmit={handleSubmit}>
      <h2 className="payment-method-form__title">Payment Method</h2>
      <div className="payment-method-form__options">
        <label className="payment-method-form__option">
          <input
            type="radio"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={() => setPaymentMethod('creditCard')}
            className="payment-method-form__input"
          />
          Credit Card
        </label>
        <label className="payment-method-form__option">
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
            className="payment-method-form__input"
          />
          PayPal
        </label>
      </div>
      <button type="submit" className="payment-method-form__button">Review Order</button>
    </form>
  );
};

export default PaymentMethod;
