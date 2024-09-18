import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CategoryPage.css';

function CategoryPage() {
  const [categories, setCategories] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryItems, setCategoryItems] = useState([]); 

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('http://127.0.0.1:8000/categories/Categories/category/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          },
        });
       
        const data = await response.json();
        if (data && Array.isArray(data.results)) {
          setCategories(data.results);
        } else {
          console.error('Unexpected data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, [token]);
console.log(selectedCategory)
  useEffect(() => {
    if (selectedCategory) {
      async function fetchCategoryItems() {
        try {
          const response = await fetch(`http://127.0.0.1:8000/categories/Categories/Products/?category=${selectedCategory}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,
            },
          });
          const data = await response.json();
          if (data && Array.isArray(data.results)) {
            setCategoryItems(data.results); 
          } else {
            console.error('Unexpected data structure:', data);
          }
        } catch (error) {
          console.error('Error fetching category items:', error);
        }
      }

      fetchCategoryItems();
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="category-container">
      <h2 className="category-header">Shop by Category</h2>
      <div className="category-buttons">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category.id}
              className="category-button"
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </button>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
      <div className="category-content">
        {selectedCategory ? (
          <div>
            <h3>{categories.find(c => c.id === selectedCategory)?.name || 'Category'}</h3>
            <div className="category-items">
              {Array.isArray(categoryItems) && categoryItems.length > 0 ? (
                categoryItems.map(item => (
                  <div key={item.id} className="category-item">
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    <Link className="product__button" to={`/productDetails/${item.id}`}>
                      View Details
                    </Link>
                  </div>
                ))
              ) : (
                <p>Loading items...</p>
              )}
            </div>
          </div>
        ) : (
          <h3>Select a category to view items.</h3>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
