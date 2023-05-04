import React from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const {id}=useParams();
    return (
        <div>
            this is chef detils:{id}
            
        </div>
    );
};

export default ViewDetails;