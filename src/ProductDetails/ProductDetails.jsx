import React, { useState, useEffect, useContext } from 'react';
import ProductInfo from './ProductInfo';
import ProductActions from './ProductActions';
import { useParams } from 'react-router-dom';
import SimilarProducts from './SimilarProducts';
import { UserContext } from '../AppProvider';
const ProductDetails = () => {
const {user} = useContext(UserContext)
const token = localStorage.getItem('token');
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(5); 
  const api_url = `http://127.0.0.1:8000/categories/Categories/Products/${id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(api_url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,
          }})
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
      <SimilarProducts/>
    </div>
  );
};

export default ProductDetails;
