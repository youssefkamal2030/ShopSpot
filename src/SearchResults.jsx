import React, { useState, useContext } from "react";
import Product from "./ProductListng/ProductCard";
import { func } from "prop-types";
import { QueryContext, ProductContext } from "./AppProvider";
import "./SearchResults.css"
const SearchResults = () => {
  const { query } = useContext(QueryContext);
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filteredProducts);
  return (
    <>

      <div className="search-results">
        {filteredProducts.map((product) => (
          <Product Product={product} id={Product.id} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
