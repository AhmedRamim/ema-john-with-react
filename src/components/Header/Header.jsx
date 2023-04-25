import React, { useContext } from 'react';
import image from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
        .then(result => {})
        .catch(error => console.log(error))
    }
    return (
        <div className='bg-[#1C2B35] w-full  md:px-16   overflow-x-auto'>
            <div className="navbar text-white">
                <div className="flex-1">
                   <Link to='/'> <img className="btn btn-ghost normal-case text-xl " src={image} alt="" /></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal items-center px-3">
                        <Link className='mr-6 hover:text-orange-300 duration-100 font-semibold' to='/'>Shop</Link>
                        <Link className='mr-6 hover:text-orange-300 font-semibold' to='/orders'>Order Review</Link>
                        <Link className='mr-6 hover:text-orange-300 font-semibold' to='/inventory'>Manage Inventory</Link>
                        <Link className='mr-6 hover:text-orange-300 font-semibold' to='/login'>Login</Link>
                        <Link className='mr-6 hover:text-orange-300 font-semibold' to='/signup'>SignUp</Link>
                        {
                            user && <span>Welcome {user.email} <button className="btn btn-accent" onClick={handleSignOut}>Sign Out</button></span> 
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;