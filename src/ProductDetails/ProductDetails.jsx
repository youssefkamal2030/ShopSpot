import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';
import ProductActions from './ProductActions';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(5); 

  const api_url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(api_url);
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuyNow = (quantity) => {
    if (count >= quantity) {
      setCount(count - quantity);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="product-details">
      <div className="product-details__info">
        <ProductInfo Product={product} count={count} />
      </div>
      <ProductActions
        Product={product}
        count={count}
        onBuyNow={handleBuyNow}
      />
    </div>
  );
};

export default ProductDetails;
