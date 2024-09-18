import CartSummary from './CartSummary';
import './OrderReview.css';
const OrderReview = ({ shippingInfo, paymentMethod, cartItems, onPlaceOrder }) => {
  const handlePlaceOrder = async () => {
    const orderData = {
      shippingInfo,
      paymentMethod,
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
      })),
    };
console.log(cartItems)
    try {
      const response = await fetch('/api/orders/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Order placed successfully:', result);
      onPlaceOrder(); 
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

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
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default OrderReview;
