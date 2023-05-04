import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProviders';

const Login = () => {
  const {user,logIn}=useContext(AuthContext)
  const [success,setSuccess]=useState('');
    const[error,setError]=useState('');
    const location=useLocation();
    const Navigate=useNavigate();

    const from=location.state?.from?.pathname || '/'

    const handleLogiN=event=>{
    event.preventDefault();
    setError('');
    setSuccess('');
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
     if(!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)){
            setError('Minimum six characters, at least one letter, one number and one special character:');
            return;
        }
      logIn(email,password)
        .then((userCredential) => { 
         const LoggedUser = userCredential.user;
         console.log(LoggedUser)
          setSuccess('Congratulation');
            form.reset();
            Navigate(from ,{replace:true})
      })
           .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
          
  }




    return (
        <div>
            <div className="hero min-h-screen bg-red-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Welcome to Grant Restaurent.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogiN}>
          <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' required placeholder="password" className="input input-bordered" />
          
        </div>
         <h2 className='text-xl text-green-800 text-center'>{success}</h2>
          <h2 className=' text-red-800 text-center'>{error}</h2>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="text-grey-dark mt-6">
            Have an Account? 
            <Link to='/registration' className="no-underline border-b border-blue p-1 bg-slate-300 text-blue">
                 Sign up</Link>.
        </div>
      </div>

      </form>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;