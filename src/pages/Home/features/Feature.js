import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import ModalBtn from './Modal';



// feature silent image
import feature from '../../../images/feature.jpg'



const Feature = () => {
 
   return (
      <>
         <Container className='mt-5'>
            <h1 className="text-center fw-bold fs-2 py-5">Our Salient Features</h1>

            <div className="row  gx-lg-5 d-flex justify-content-around align-items-center">
            <div className="col-12 col-lg-6">
                  <div className="feature-img ">
                     <img src={feature} alt="" className='d-block w-100'/>
                  </div>
               </div>
               <div className="col-12 col-lg-6 ">

                  <h2 > <strong>We will provide this things to our stodents</strong>  </h2>
                  <div className="py-3 me-3 ">
                  

                        <p><Icon.ArrowRight size={30} style={{ 'color': "green" }} />Basic of Islam are taught and practiced in the school</p>
                        <p><Icon.ArrowRight size={30} style={{ 'color': "green" }}/>All teachers and staffs are Muslims and thus would maintain an islamic atmosphere in the school</p>
                        <p><Icon.ArrowRight size={30} style={{ 'color': "green" }}/>Students are expected to wear Islamic attire and maintain a proper Islamic manner which gets reflected in the rest of their lives</p>
                        <p><Icon.ArrowRight size={30} style={{ 'color': "green" }}/>Learning and activity based teaching methods </p>
                        <p><Icon.ArrowRight size={30} style={{ 'color': "green" }}/>Tained, component and skilled taechers</p>
                        <p><Icon.ArrowRight size={30} style={{ 'color': "green" }}/>Pure and elegant accent based on Tajweed</p>
  
                  </div>
                  <ModalBtn />
                  {/* <Button variant="outline-success">Get Started</Button> */}
               </div>

      
            </div>
         </Container>
      </>
   );
};

export default Feature;