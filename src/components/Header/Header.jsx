import React from 'react';
import image from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='bg-[#1C2B35] w-full md:px-16  '>
            <div className="navbar text-white">
                <div className="flex-1">
                    <img className="btn btn-ghost normal-case text-xl" src={image} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-3">
                        <li className='hover:text-orange-400'><a>Order</a></li>
                        <li className='hover:text-orange-400'><a>Order Review</a></li>
                        <li className='hover:text-orange-400'><a>Manage Inventory</a></li>
                        <li className='hover:text-orange-400'><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;