import React, { useEffect, useState } from 'react';
import image from './../img/img1.jpg'
import image1 from './../img/img2.jpg'
import image2 from './../img/img-5.jpg'
import slider from './../img/slod.jpg'
import slider2 from './../img/slider1jpg.jpg'
import slider3 from './../img/slider6jpg.jpg'
import ChefCard from './ChefCard';

const Home = () => {

   const [catagories,setCatagories]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/chef")
    .then(res=>res.json())
    .then(data=>setCatagories(data))
    // .then(data=>console.log(data))
    .catch(error=>console.error(error))

  },[])






    return (
      <div>

         <div className='p-48 bg-slate-300'>
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
       </div>
        <div className='bg-orange-200 '>

            <h4 className='text-center text-2xl font-bold py-10'>Chef C<span className='text-blue-800'>or</span>ner</h4>
            <div className='md:grid grid-cols-3 gap-10  '>

               {
              catagories.map(catagory=><ChefCard key={catagory.id} catagory={catagory}></ChefCard>)
            }
          

            </div>
           

          </div>

      </div>
     
    );
};

export default Home;