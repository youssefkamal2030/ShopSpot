import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
    const { Product } = props;

    return (
        <div className="product">
            <div className="product__info">
                {Product?.title && <p className="product__title">{Product.title}</p>}
                <p className="product__price">
                    <small>$</small>
                    <strong>{Product?.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(Math.floor(Product?.rating?.rate || 0)).fill().map((_, i) => (
                        <span key={i} role="img" aria-label="star">🌟</span>
                    ))}
                </div>
            </div>

            <img src={Product?.image} alt={Product?.title || "Product Image"} />

            <Link className="product__button" to={`/productDetails/${Product?.id}`}>
                View Details
            </Link>
        </div>
    );
}

export default Product;
