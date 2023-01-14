import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div className='container'>
         <div className="row mx-auto text-center">
            <div className="col-12">
               <p className='mb-2 fw-bold display-1 uppercase text-success'>
               Error-[404]
               </p>
               <h2 className='text-info mb-4'>
                  you're looking wrong page.
               </h2>

               <Link to='/'  className=' mb-2 py-2 px-3 text-white mt-3 bg-success text-decoration-none'>
                 Back to homepage </Link>
                 
            </div>
         </div>
        
      </div>
   );
};

export default NotFound;