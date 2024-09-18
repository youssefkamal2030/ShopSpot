import React, { useEffect, useState } from "react";
import "./SimilarProducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarProducts = ({ Category }) => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="similar-products">
      <h2>Similar Products</h2>
      <Slider {...settings}>
        {similarProducts.map((product) => (
          <div key={product.id} className="similar-product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarProducts;