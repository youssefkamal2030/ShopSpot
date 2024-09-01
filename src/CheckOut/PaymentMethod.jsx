import React, { useState } from 'react';

const PaymentMethod = ({ onPaymentSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentSubmit(paymentMethod);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Method</h2>
      <label>
        <input
          type="radio"
          value="creditCard"
          checked={paymentMethod === 'creditCard'}
          onChange={() => setPaymentMethod('creditCard')}
        />
        Credit Card
      </label>
      <label>
        <input
          type="radio"
          value="paypal"
          checked={paymentMethod === 'paypal'}
          onChange={() => setPaymentMethod('paypal')}
        />
        PayPal
      </label>
      <button type="submit">Review Order</button>
    </form>
  );
};

export default PaymentMethod;
