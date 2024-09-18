import React, { useContext } from 'react';
import { CartContext } from '../AppProvider';
const CartSummary = () => {
  const { cart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <ul>
        {cart.map(item => (
          <li key={item.product.id}>
            {item.product.title} x {item.quantity} = ${item.product.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default CartSummary;
