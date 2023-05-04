import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import pic from './../img/logo@2x_white.png'
import image from './../img/img1.jpg'
import image1 from './../img/img2.jpg'
import image2 from './../img/img-5.jpg'
import slider from './../img/slod.jpg'
import slider2 from './../img/slider1jpg.jpg'
import slider3 from './../img/slider6jpg.jpg'
import { AuthContext } from './Providers/AuthProviders';



const Headers = () => {
  const {user,logOut}=useContext(AuthContext)

  const handlelogOut=()=>{
     logOut()
        .then(()=>{})
        .catch(error=>console.log(error))

  }





    return (
      <div >
          <div className='sm:flex justify-around bg-yellow-300 p-4'>
           <div className='sm:flex items-center'>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          </span>
          <p>
            732/21 Second Street, King Street, UK
          </p>
        </div>
        <div className='sm:flex items-center bg-slate-100 p-3 rounded-lg'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Welcome
</button>
          <div>
              <Marquee className='text-xl font-medium'>
              Best French food for Taste.Have a fency French..
            </Marquee>
          </div>
        </div>
        <div className='sm:flex items-center'>
          <span className='pe-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

          </span>
          <p className='font-bold'>
            Locate
Cart
Purchase 
          </p>
        </div>
          </div>

          <div style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    height:500
    }} className='p-12 '>
        <div className='md:flex justify-between items-center'>
        <div className='w-25 '>
          <img src={pic} alt="" srcset="" />
        </div>         
        <div className='md:flex justify-center '>
          <div className='hover:bg-slate-100'>
            <Link className='text-xl font-extrabold  hover:text-orange-700 m-6' to='/'>Home</Link>
            </div>
            <div className='hover:bg-slate-100'>
            <Link className='text-xl font-extrabold  hover:text-orange-700 m-6' to=''>Menus</Link>
            </div>
            {/* <div className='hover:bg-slate-100'>
            <Link className='text-xl font-extrabold  hover:text-orange-700 m-6' to='/registration'>Registation</Link>
             
          
            </div>   */}
            {/* <div className='hover:bg-slate-100'>
            <Link className='text-xl font-extrabold  hover:text-orange-700 m-6' to='/login'>Log-In</Link>
             
          
            </div>   */}
             
             
          {
                    user ? <span className='sm:flex'><p className='p-2 bg-blue-500 font-bold text-white '> {user.email}  </p>
                    <button onClick={handlelogOut} class=" bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Out</button></span> 
                   
                    :
                    <span className='md:flex'> 
                     
                        <div className='hover:bg-slate-100'>
            <Link className='text-xl font-extrabold  hover:text-orange-700 m-6' to='/registration'>Registation</Link>
             
          
            </div>  
            <div className='hover:bg-slate-100'>
            <Link className='text-xl font-extrabold  hover:text-orange-700 m-6' to='/login'>Log-In</Link> 
            </div>  
                      
                    </span>
                }
                <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to='/blog'>Blog</Link>
          </button> 
          </div>
          
        </div>
        <div className='lg:my-20 lg:ps-8'>
          <p className='font-bold text-2xl text-yellow-300 ' >Welcome to</p>
          <h1 className='font-bold text-5xl  my-4 text-white'>GRAND RESTAURANT</h1>
          <div className='text-xl font-bold  text-yellow-300'>
            <p>MAKING THE DELICIOUS PREMIUM FOOD SINCE 1990</p>
            <p>BOOK ONLINE OR CALL (1800)456-6743</p>
          </div>


        </div>
       
          </div>
          {/* <div className='p-48 bg-slate-300'>
            <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slider} className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slider2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slider3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
         
          </div> */}
        
      </div>
    
      
    );
};

export default Headers;