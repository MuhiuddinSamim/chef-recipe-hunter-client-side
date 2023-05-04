import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({catagory}) => {
    console.log(catagory.picture);
    return (
        
              <div className="m-10 card  bg-base-100 box-shadow-2xl">
  <figure><img src={catagory.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {catagory.name}
  <div className="justify-center badge badge-secondary p-4"> like: {catagory.rating}M</div>
      
    </h2>
    <p>{catagory.chefDetails}</p>
    <div className="card-actions justify-end">
       <div className="justify-center badge badge-secondary p-4">Experience:{catagory.experience}</div>
       <div className="justify-center badge badge-primary p-4">Recipes Num:{catagory.num_recipes}</div>
    </div>
  </div>

       <button className="btn w-32 text-center btn-success  m-3"><Link to={`/catagory/${catagory.id}`}>View Recipes</Link></button>

  
  
</div>
      
    );
};

export default ChefCard;