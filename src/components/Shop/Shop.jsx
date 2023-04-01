import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])

    const handleAddToCart = (product) => {
        const newCart = [...cart,product]
        setCart(newCart)
    }
    
    useEffect(() => {
        fetch('products.json')
            .then(res=> res.json())
            .then(data => setProducts(data))
    },[])
    return (
       <div className="shop-container mt-8 px-3 ">
        <div className="products-container grid grid-cols-3 gap-8 mx-8">
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
            }
        </div>
        <div className="cart-container space-y-3 bg-pink-100 p-2 rounded-xl">
            <h2 className='text-2xl font-bold text-center'>Order Summary</h2>
            <h1 className='text-xl'>Selected Items: <span className='font-bold'>{cart.length}
            <p>name: </p>
            </span></h1>
        </div>
       </div>
    );
};

export default Shop;