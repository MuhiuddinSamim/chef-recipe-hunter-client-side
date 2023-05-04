import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';

const ViewDetails = () => {
    const {id}=useParams();
    const details=useLoaderData()
    console.log(details);
    return (
      <div className='md:grid grid-cols-2 gap-10 p-20' >
        <div className='w-100 border-x-2 bg-slate-400'>
            <img className='m-auto' src={details.picture} alt="" />
            <div className='p-4 bg-lime-300'>
                
                <h1 className='text-2xl font-bold'>Name:{details.name}</h1>
                <h4 className='text-xl font-bold'>Experience:{details.experience}years</h4>
                <p className='text-xl font-bold'>Recipes Number:{details.num_recipes}</p>
                <div className='bg-red-200 p-6 m-4'>
                    <h2 className='text-2xl font-extrabold text-white'>
                        Introduction:
                    </h2>
                <p className='ps-8'>{details.chefDetails}</p>

                </div>
            </div>
            
            
            
        </div>
        <div className='bg-red-100 p-6'>
            <h1 className='text-xl font-bold'>Recipes are here</h1>
            {
                details.recipes.map((singleRecipe,index)=> <SingleRecipe key={index} singleRecipe={singleRecipe}></SingleRecipe> )
            }
        </div>
      </div>
    );
};

export default ViewDetails;