import React from 'react';

const SingleRecipe = ({singleRecipe}) => {
    console.log(singleRecipe)
    return (
        <div className='p-10 bg-blue-200 m-4'>
            
           <h1 className='text-2xl font-bold text-orange-500'>{singleRecipe.name}</h1>
           <h4 className='font-semibold py-4'>Ingredients:</h4>
           <div className='p-6 bg-blue-400'>
           {singleRecipe.ingredients.map(indgratient=> <p>={indgratient}</p>)}
           </div>
            <p className='p-4 bg-teal-400'>{singleRecipe.method}</p>
            <h2 className='py-4'> Rating :4.5</h2>
            <button className='btn btn-secondary'>Favourite</button>


        </div>
    );
};

export default SingleRecipe;