
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleRecipe = ({singleRecipe}) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        toast.success("Added on Favourite list!");
    };

    return (
        <div className='p-10 bg-blue-200 m-4'>
            <h1 className='text-2xl font-bold text-orange-500'>{singleRecipe.name}</h1>
            <h4 className='font-semibold py-4'>Ingredients:</h4>
            <div className='p-6 bg-blue-400'>
                {singleRecipe.ingredients.map(indgratient=> <p>={indgratient}</p>)}
            </div>
            <p className='p-4 bg-teal-400'>{singleRecipe.method}</p>
            <h2 className='py-4'> Rating :4.5</h2>
            <div>
                <button 
                    onClick={handleClick} 
                    className='btn btn-secondary' 
                    disabled={clicked}
                >
                    {clicked ? "Added to Favourites" : "Favourite"}
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SingleRecipe;
