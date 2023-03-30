import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
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
                    ></Product>)
            }
        </div>
        <div className="cart-container">
            <h2 className='text-2xl font-bold'>Order Summary</h2>
        </div>
       </div>
    );
};

export default Shop;