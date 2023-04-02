import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])

   
    useEffect(() => {
        fetch('products.json')
            .then(res=> res.json())
            .then(data => setProducts(data))
    },[])

    useEffect(()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step:1 get id of the addedProduct..........
        for (const id in storedCart){
            // step:2 get product from the products state by using id.....
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // step:3 add quantity...
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                // step:4 add the added Product to the savedCart.
                savedCart.push(addedProduct);
            }
        }
        // step:5 set the cart.
        setCart(savedCart)
    },[products])

    const handleAddToCart = (product) => {
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)
    }
    

    return (
       <div className="shop-container  grid grid-cols-1 md:grid-cols-12 mt-8 px-3 ">
            <div className="products-container grid grid-cols-1 col-span-9 md:grid-cols-3 gap-8 mx-8">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container space-y-3  col-span-3 bg-pink-100 p-2 rounded-xl">
                <Cart cart ={cart}></Cart>
                
            </div>
       </div>
    );
};

export default Shop;