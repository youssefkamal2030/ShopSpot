import React, { useContext } from 'react';
import './ProductInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductContext } from '../AppProvider';
import ProductActions from './ProductActions'; 

const ProductInfo = ({ Product }) => {
  const { products } = useContext(ProductContext);
  const count = products.quantity
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="image-gallery">
            <img
              src={Product?.image}
              alt={Product?.title || "Product Image"}
              className="img-fluid main-image"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="product-info__title">{Product.title}</h1>
          </div>
          <div className="product-info__price display-4 text-primary">
            ${Product.price}
          </div>
          <p className="text-muted">List Price: <strike>$99.99</strike></p>
          <p className="product-info__description">{Product.description}</p>
          <div className={`availability ${count === 0 ? 'text-danger' : 'text-success'} mb-2`}>
            {count === 0 ? 'Out of Stock' : 'In Stock'}
          </div>
          <ProductActions Product={Product} onBuyNow={(quantity) => alert(`Proceeding to checkout with ${quantity} items.`)} />
          <div className="shipping mt-3">
            <p>Ships from: <strong>ShopSpot</strong></p>
            <p>Sold by: <strong>Kuzil-Direct</strong></p>
          </div>
        </div>
      </div>
  );
};

export default ProductInfo;
