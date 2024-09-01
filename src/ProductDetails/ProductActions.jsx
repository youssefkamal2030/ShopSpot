import React, { useContext, useState } from 'react';
import './ProductActions.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../Cart/CartContext';

const ProductActions = ({ Product, count, onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(Product, quantity);
      console.log(`Added ${quantity} of ${Product.title} to cart.`);
    }
  };

  const handleBuyNow = () => {
    if (count > 0) {
      addToCart(Product, quantity);
      onBuyNow(quantity); // Decrease the stock count
      console.log(`Bought ${quantity} of ${Product.title}.`);
    }
  };

  return (
    <div className="product-actions mt-4">
      <div className="quantity-selector mb-3">
        <label htmlFor="quantity" className="mr-2">Quantity:</label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="form-control"
          style={{ width: '80px', display: 'inline-block' }}
          disabled={count === 0} // Disable if out of stock
        >
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn btn-warning btn-lg btn-block"
        onClick={handleAddToCart}
        disabled={count === 0} // Disable if out of stock
      >
        {count === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
      <button
        className="btn btn-secondary btn-lg btn-block mt-2"
        onClick={handleBuyNow}
        disabled={count === 0} // Disable if out of stock
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;
