import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/calculate';
import { totalPrice } from '../../utilities/fakedb';
import Cosmetic from '../Cosmetic/Cosmetic';
import Shoes from '../Shoes/Shoes';
// import add from '../../utilities/calculate';
const Cosmetics = () => {
   const [cosmetics,setCosmetics] = useState([])

    const total = totalPrice(cosmetics)
   useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))
   },[])
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            <h1>Total Price {total}</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;