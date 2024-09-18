import React, { useState, useContext } from 'react';
import './ProductActions.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext, ProductContext } from '../AppProvider';

const ProductActions = ({ Product, onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);  
  const { products } = useContext(ProductContext);
  const count = products.find(p => p.id === Product.id)?.quantity ;

    const handleAddToCart = () => {
    if (quantity > count) {
      alert('Not enough stock available');
      return;
    }
    addToCart(Product, quantity);
  };

  const handleBuyNow = () => {
    if (quantity > count) {
      alert('Not enough stock available');
      return;
    }
    addToCart(Product, quantity);
    onBuyNow(quantity);
  };

  return (
    <div className="product-actions mt-4">
      <div className="quantity-selector mb-3">
        <label htmlFor="quantity" className="mr-2">Quantity:</label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          className="form-control"
          style={{ width: '80px', display: 'inline-block' }}
          disabled={count === 0}
        >
          {count > 0 && [...Array(count).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn btn-warning btn-lg btn-block"
        onClick={handleAddToCart}
        disabled={count === 0}
      >
        Add to Cart
      </button>
      <button
        className="btn btn-secondary btn-lg btn-block mt-2"
        onClick={handleBuyNow}
        disabled={count === 0}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;
