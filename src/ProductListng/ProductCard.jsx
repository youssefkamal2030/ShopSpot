import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
    const { Product } = props;
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(prevState => !prevState);
    };
console.log(Product);
    const getLimitedDescription = (description) => {
        try {
            const words = description.split(' ');
            return words.length > 10 ? words.slice(0, 10).join(' ') + '...' : description;
        }
        catch(error) {
            console.error('Error processing description:', error);
            return description;
        }
    };
    return (
        <div className="product">
            <div className="product__info">
                {Product?.name && <p className="product__title">{Product.name}</p>}
                <p className="product__price">
                    <small>$</small>
                    <strong>{Product?.price}</strong>
                </p>

                <p className="product__description">
                    {showMore ? Product?.description : getLimitedDescription(Product?.description)}
                    {Product?.description && Product?.description.split(' ').length > 20 && (
                        <button onClick={toggleShowMore} className="see-more-button">
                            {showMore ? "See Less" : "See More"}
                        </button>
                    )}
                </p>
               
                <p className="product__color">
                    <strong>Color:</strong> {Product?.color}
                </p>
                <p className="product__size">
                    <strong>Size:</strong> {Product?.size}
                </p>
            </div>

            <img src={Product?.image} alt={Product?.name || "Product Image"} />

            
            <Link className="product__button" to={`/productDetails/${Product?.id}`}>
                View Details
            </Link>
            
        </div>
    );
}

export default Product;
