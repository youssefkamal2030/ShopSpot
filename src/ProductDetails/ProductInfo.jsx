import React from 'react';
import './ProductInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductInfo = ({ Product, count }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column: Image Gallery */}
        <div className="col-md-6">
          <div className="image-gallery">
            <img
              src={Product?.image}
              alt={Product?.title || "Product Image"}
              className="img-fluid main-image"
            />
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="col-md-6">
          <h1 className="product-info__title">{Product.title}</h1>
          <div className="product-info__rating mb-2">
            {Array(Math.floor(Product.rating.rate))
              .fill()
              .map((_, i) => (
                <span key={i} role="img" aria-label="star">🌟</span>
              ))}
            <span className="text-muted ml-2">({Product.rating.count} ratings)</span>
          </div>
          <div className="product-info__price display-4 text-primary">
            ${Product.price.toFixed(2)}
          </div>
          <p className="text-muted">List Price: <strike>$99.99</strike></p>
          <p className="product-info__description">{Product.description}</p>

          {/* Stock Status */}
          <div className={`availability ${count === 0 ? 'text-danger' : 'text-success'} mb-2`}>
            {count === 0 ? 'Out of Stock' : 'In Stock'}
          </div>

          <div className="shipping mt-3">
            <p>Ships from: <strong>ShopSpot</strong></p>
            <p>Sold by: <strong>Kuzil-Direct</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
