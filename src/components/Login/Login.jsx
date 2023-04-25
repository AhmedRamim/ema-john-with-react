import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';



const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        login(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            e.target.reset()
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login!!</h1>
                </div>
                <div className="card flex-shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-300 hover:bg-orange-500 border-none  text-white">Login</button>
                        </div>
                        <div>
                            <p>New to Ema-John?<Link className='btn-link pl-2' to='/signup'>Create an Account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;