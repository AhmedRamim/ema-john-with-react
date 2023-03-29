import React from 'react';
import { addToCartDB, removeCartDB } from '../../utilities/fakedb';

import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name,id,price} = props.cosmetic;
    // const addToCart =(id) => {
    //     localStorage.setItem(id,1);
    // }
    // const addToCartWithParam = () => addToCart(id)

    return (
        <div className='product'>
            <h4>Buy this: {name}</h4>
            <h4>Only ${price} </h4>
            <p>It has id : {id}</p>
            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
            {/* // shortcut way */}
            <button onClick={() => addToCartDB(id)}>Add to Cart</button> 
            <button onClick={() => removeCartDB(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;