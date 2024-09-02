import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'; // Assuming you want to add custom CSS

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is empty
        </div>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.product.title}</h5>
                  <p className="mb-0">Quantity: {item.quantity}</p>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <Link to="/checkout">
              <button className="btn btn-primary btn-lg">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
