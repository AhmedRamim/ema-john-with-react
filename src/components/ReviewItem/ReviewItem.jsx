import React from 'react';

const ReviewItem = ({ product,handleRemoveToCart }) => {
    const { name, img, price, quantity, seller,id } = product;

    return (
        <div className='w-[570px] border-2 border-gray-400 rounded-lg mb-6  p-2  flex justify-between items-center'>
            <div className='flex gap-4'>
                <img src={img} className='w-20 h-20' alt="" />
                <div>
                    <p className='font-medium'>{name}</p>
                    <p>Price: <span className='text-orange-400 font-semibold'>${price}</span></p>
                    <p>Order Quantity: <span className='text-orange-400 font-semibold'>{quantity}</span></p>
                </div>
            </div>
            <button onClick={() => handleRemoveToCart(id)} className=' w-12 h-12 flex flex-col items-center justify-center py-0 rounded-[50%] bg-red-300'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </button>
        </div>
    );
};

export default ReviewItem;