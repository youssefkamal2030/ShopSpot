// src/Checkout.js
import React, { useState } from 'react';
import CartSummary from './CartSummary';
import ShippingForm from './ShippingForm';
import PaymentMethod from './PaymentMethod';
import OrderReview from './OrderReview';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleShippingSubmit = (info) => {
    setShippingInfo(info);
    setStep(2);
  };

  const handlePaymentSubmit = (method) => {
    setPaymentMethod(method);
    setStep(3);
  };

  const handlePlaceOrder = () => {
    console.log('Order placed successfully!');
    // Here you would send the order to your backend or payment gateway
  };

  return (
    <div className="checkout">
      {step === 1 && <ShippingForm onShippingSubmit={handleShippingSubmit} />}
      {step === 2 && <PaymentMethod onPaymentSubmit={handlePaymentSubmit} />}
      {step === 3 && <OrderReview shippingInfo={shippingInfo} paymentMethod={paymentMethod} onPlaceOrder={handlePlaceOrder} />}
    </div>
  );
};

export default Checkout;
