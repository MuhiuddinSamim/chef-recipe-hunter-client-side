import React from 'react';
import { Link } from 'react-router-dom';
import pic from './../img/logo@2x.png'

const Headers = () => {
    return (
      <div className='my-container'>
        <div className='w-20'>
          <img src={pic} alt="" srcset="" />
          <div>
            <Link to=''>Home</Link>
            <Link to=''></Link>
            <Link to=''></Link>
          </div>
        </div>
      </div>
      
    );
};

export default Headers;