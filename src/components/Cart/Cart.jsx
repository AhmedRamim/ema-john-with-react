import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    let shipping = 0;
    let total = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = total * 7 /100;
    const grandTotal = shipping + total + tax

    return (
        <div className='space-y-3  sticky top-0'>
            <h2 className='text-2xl font-bold text-center'>Order Summary</h2>
            <h1 className='text-xl'>Selected Items: <span className='font-bold'>{cart.length} </span></h1>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p className='text-2xl'>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;