import React from 'react';
import image from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-[#1C2B35] w-full  md:px-16   overflow-x-auto'>
            <div className="navbar text-white">
                <div className="flex-1">
                    <img className="btn btn-ghost normal-case text-xl " src={image} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-3">
                        <Link className='mr-6 hover:text-orange-300 font-semibold' to='/'>Shop</Link>
                        <Link className='mr-6 hover:text-orange-300 font-semibold' to='/orders'>Order Review</Link>
                        <Link className='mr-6 hover:text-orange-300 font-semibold' to='/inventory'>Manage Inventory</Link>
                        <Link className='mr-6 hover:text-orange-300 font-semibold' to='/login'>Login</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;