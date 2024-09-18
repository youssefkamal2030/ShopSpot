import React, { useState, useContext } from 'react';
import CartSummary from './CartSummary';
import ShippingForm from './ShippingForm';
import PaymentMethod from './PaymentMethod';
import OrderReview from './OrderReview';
import { CartContext } from '../AppProvider'; 

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [successMessage, setSuccessMessage] = useState(''); 
  const { cart } = useContext(CartContext); 

  const handleShippingSubmit = (info) => {
    setShippingInfo(info);
    setStep(2);
  };

  const handlePaymentSubmit = (method) => {
    setPaymentMethod(method);
    setStep(3);
  };

  const handlePlaceOrder = () => {
    const orderData = {
      products: cart.map(item => ({
        product_id: item.product.id,
        quantity: item.quantity,
      })),
      shipping_info: shippingInfo,
      payment_method: paymentMethod,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to place order');
        }
      })
      .then(data => {
        console.log('Order placed successfully!', data);
        setSuccessMessage('Your order has been placed successfully!'); 
        setStep(4); 
      })
      .catch(error => {
        console.error('Error placing order:', error);
        setSuccessMessage('There was an error placing your order. Please try again.');
      });
  };

  return (
    <div className="checkout">
      {step === 1 && <ShippingForm onShippingSubmit={handleShippingSubmit} />}
      {step === 2 && <PaymentMethod onPaymentSubmit={handlePaymentSubmit} />}
      {step === 3 && (
        <OrderReview
          shippingInfo={shippingInfo}
          paymentMethod={paymentMethod}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
      {step === 4 && (
        <div className="order-success">
          <h2>{successMessage}</h2>
        </div>
      )}
    </div>
  );
};

export default Checkout;
