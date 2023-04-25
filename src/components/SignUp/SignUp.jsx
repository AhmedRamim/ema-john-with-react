import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const {user,createUser} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const confirm = e.target.Confirm.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        if(confirm !== password){
            setError('Password did not match')
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 characters or longer')
            return
        }
        
        createUser(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            setError(error.message)
        })
    }
    // setError('')
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up!!</h1>
                </div>
                <div className="card flex-shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
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
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='Confirm' required placeholder="Confirm" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-300 hover:bg-orange-500 border-none  text-white">SignUp</button>
                        </div>
                        <div>
                            <p>Already have an account? <Link className=' btn-link' to='/login'>Login</Link></p>
                            <p className='text-error'>{error}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;