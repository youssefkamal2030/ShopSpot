import React, { useContext, useEffect,useState } from 'react';
import { CartContext } from '../AppProvider'; 
import { Link } from 'react-router-dom';
import './Cart.css'; 
import OrderReview from '../CheckOut/OrderReview';

const Cart = () => {
  const { cart, removeFromCart, fetchCartData } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart);

  
  useEffect(() => {
    fetchCartData(); 
  }, [fetchCartData]);
  if(cart)
  {
    useEffect(() => {
      setCartItems(cart);
    }, [cart]);
  }
  console.log(cart);
  if (!cart || cart.length === 0) {
    return (
      <div className="container my-5">
        <h1 className="text-center mb-4">Your Cart</h1>
        <div className="alert alert-warning text-center">
          Your cart is empty
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.product.title}</h5>
              <p className="mb-0">Quantity: {item.quantity}</p>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.product.id)}>
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
    </div>
  );
};

export default Cart;
