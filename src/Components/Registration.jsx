import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
<div className="bg-orange-200 min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl font-semibold text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="bg-slate-200 block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Full Name" />
                    
                    <input 
                        type="text"
                        className="bg-slate-200 block border border-grey-light w-full p-3 rounded mb-4"
                        name="photo"
                        placeholder="Photo Url" />

                    <input 
                        type="text"
                        className="bg-slate-200 block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="bg-slate-200 block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-600 text-white-600 hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                    <div className="text-grey-dark mt-6">
                         Already have an account? 
                              <Link to='/login' className="no-underline border-b border-blue text-blue">
                                   Log in
                                   </Link>.
                    </div>
                    <div>
                        <p>Sign up with</p>
                        
                    </div>

                  
                </div>

               
            </div>
        </div>
    );
};

export default Registration;