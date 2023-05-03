import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub} from 'react-icons/fa';
import { AuthContext } from './Providers/AuthProviders';


const Registration = () => {
    const {user,createUser}=useContext(AuthContext);


    const handleRegistration=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photo,email,password);
        
        


    }








    return (
    <div className="bg-orange-200 min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl font-semibold text-center">Sign up</h1>
            <form action="" onSubmit={handleRegistration}>

                     <input 
                        type="text"
                        className="bg-slate-200 block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Full Name"  required/>
                    
                    <input 
                        type="text"
                        className="bg-slate-200 block border border-grey-light w-full p-3 rounded mb-4"
                        name="photo"
                        placeholder="Photo Url" required/>

                    <input 
                        type="text"
                        className="bg-slate-200 block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" required />

                    <input 
                        type="password"
                        className="bg-slate-200 block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"  required/>
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-600 text-white-600 hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                        
            </form>
 
                    <div className="text-grey-dark mt-6 text-center">
                         Already have an account? 
                              <Link to='/login' className="no-underline border-b border-blue text-blue p-1 bg-slate-300">
                                   Log in
                                   </Link>.
                    </div>
                    <div className='text-center'>
                        <h3>SignUp with</h3>
                        <div className='sm:flex justify-center p-4'>
                            <div className='bg-red-200 hover:bg-red-300 p-2 me-3'  > 
                                <FaGoogle />
                            </div>
                            <div className='bg-red-200 hover:bg-red-300 ms-3 p-2'>
                        <FaGithub/>

                            </div>

                        </div>


                    </div>

                  
        </div>

               
    </div>
    </div>
    );
};

export default Registration;