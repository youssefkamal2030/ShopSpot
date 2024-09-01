// src/OrderReview.js
import React from 'react';
import CartSummary from './CartSummary';

const OrderReview = ({ shippingInfo, paymentMethod, onPlaceOrder }) => {
  return (
    <div className="order-review">
      <h2>Review Your Order</h2>
      <CartSummary />
      <h3>Shipping Information</h3>
      <p>{shippingInfo.name}</p>
      <p>{shippingInfo.address}</p>
      <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.postalCode}</p>
      <h3>Payment Method</h3>
      <p>{paymentMethod}</p>
      <button onClick={onPlaceOrder}>Place Order</button>
    </div>
  );
};

export default OrderReview;
