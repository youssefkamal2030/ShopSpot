import React, { useContext,useEffect, useState } from 'react';
import Product from './ProductCard';
import { ProductContext } from '../AppProvider';
const ProductList = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className="container">
            <div className="row-3">
                {products.map((product) => (
                    <div className="col-20" key={product.id}>
                        <Product Product={product}  id = {Product.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
