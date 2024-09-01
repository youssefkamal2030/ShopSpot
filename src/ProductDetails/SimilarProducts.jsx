import React, { useEffect } from "react";
import "./SimilarProducts.css";
import { Category } from "@mui/icons-material";

const SimilarProducts = ({Category}) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api_url = `https://fakestoreapi.com/products/category/${Category}`;

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const response = await fetch(api_url);
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        const data = await response.json();
        setSimilarProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [Category]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="similar-products">
      <h2>Similar Products</h2>
      {/* Render similar products here */}
    </div>
  );
};

export default SimilarProducts;
