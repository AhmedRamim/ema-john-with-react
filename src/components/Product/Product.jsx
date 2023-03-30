import React from 'react';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className="card overflow-hidden  border-2  border-gray-300 w-full h-[510px] bg-base-100 shadow-xl">
            <figure className="p-2 h-[300px] mt-2 rounded-2xl">
                <img src={img} alt="Shoes" className="" />
            </figure>

            <div className=" relative">
                <div className=' space-y-3 pt-4 px-4'>
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold'>Price: ${price}</p>
                    <p>Manufacture:{seller}</p>
                    <p>Rating: {ratings} star</p>
                </div>
                <div className="text-center  pt-4 text-white font-bold text-sm rounded-xl ">
                    <div className="bg-orange-300 hover:bg-orange-500 cursor-pointer p-3 rounded">Add To Cart</div>
                </div>
            </div>

        </div>
    );
};

export default Product;