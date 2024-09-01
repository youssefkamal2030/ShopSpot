import React, { useEffect, useState } from 'react';
import Product from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const api_url = 'https://fakestoreapi.com/products';

    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

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
