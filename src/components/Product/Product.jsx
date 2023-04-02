import React from 'react';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className="card overflow-hidden  border-2  border-gray-300 w-full h-[510px] bg-base-100 shadow-xl  sticky top-0">
            <figure className="p-2 h-[300px] mt-2 rounded-2xl">
                <img src={img ? img :''} alt="Shoes" className="" />
            </figure>

            <div className=" relative">
                <div className=' space-y-3 pt-4 px-4'>
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold'>Price: ${price}</p>
                    <p>Manufacture:{seller}</p>
                    <p>Rating: {ratings} star</p>
                </div>
                <div onClick={() => handleAddToCart(props.product)} className="text-center  pt-4 text-white font-bold text-sm rounded-xl ">
                    <div className="bg-orange-300 hover:bg-orange-500 flex gap-2 justify-center cursor-pointer p-3 rounded"><p>Add To Cart</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;