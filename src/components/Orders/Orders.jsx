import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const handleRemoveToCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    // clear all item in the cart.........
    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }


    return (
        <div className='flex justify-between md:px-24'>
            <div className=" mt-12 ">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveToCart={handleRemoveToCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container space-y-3  col-span-3 bg-pink-100 p-2 rounded-xl ">
                <Cart handleClearCart={handleClearCart} cart={cart}>
                    <Link to='/checkout'>
                        <button className='btn btn-accent mt-4 w-full text-white'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;