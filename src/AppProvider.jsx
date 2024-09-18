import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);
export const CartContext = createContext(null);
export const ProductContext = createContext(null);
export const QueryContext = createContext(null);
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState(''); 
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const loginUser = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };
    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('user');
    };
    const fake_api= "https://fakestoreapi.com/products"
    const database_api="http://127.0.0.1:8000/categories/Categories/Products/";
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(database_api);
                const data = await response.json();
                setProducts(data.results)
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);
    const fetchCartData = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://127.0.0.1:8000/categories/Categories/cart/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`,
                }

            });
            if (response.ok) {
                const cartData = await response.json();
                setCart(cartData);
            } else {
                console.error('Failed to fetch cart data');
            }
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    const updateCartDataOnBackend = async (cart) => {
        const token = localStorage.getItem('token');
        for (const item of cart) {
            try {
                const response = await fetch('http://127.0.0.1:8000/categories/Categories/cart_items/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`,
                    },
                    body: JSON.stringify({
                        item: item.product.id,
                        quantity: item.quantity
                    })

                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error(`Failed to update cart item with ID: ${item.product.id}`, errorData);
                    throw new Error('Bad request');
                }
            } catch (error) {
                console.error('Error updating cart data:', error);
            }
        }
    };

    const addToCart = (product, quantity) => {
        const existingProduct = cart.find(item => item.product.id === product.id);
        let updatedCart;
        if (existingProduct) {
            updatedCart = cart.map(item => item.product.id === product.id ?
                { ...item, quantity: item.quantity + quantity } : item);
        } else {
            updatedCart = [...cart, { product, quantity }];
        }
        setCart(updatedCart);
        setProducts(products.map(p =>
            p.id === product.id ? { ...p, amount: p.amount - quantity } : p
        ));

        updateCartDataOnBackend(updatedCart);
    };
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.product.id !== productId);
        setCart(updatedCart);
        updateCartDataOnBackend(updatedCart);
    };
    return (
            <UserContext.Provider value={{ user, setUser, loginUser, logoutUser }}>
                <ProductContext.Provider value={{ products }}>
                    <CartContext.Provider value={{ cart, addToCart, removeFromCart, fetchCartData }}>
                    <QueryContext.Provider value={{ query, setQuery }}>
                        {children}
                    </QueryContext.Provider>
                    </CartContext.Provider>
                </ProductContext.Provider>
            </UserContext.Provider>
    );
};
