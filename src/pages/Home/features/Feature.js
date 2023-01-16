import React from 'react';
import {Container} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import ModalBtn from './Modal';

// feature silent image
import feature from '../../../images/feature.jpg'

const Feature = () => {
 
   return (
      <>
         <Container className='mt-5'>
            <h1 className="text-center text-success fw-bold fs-2 py-5">Our Salient Features</h1>

            <div className="row  gx-lg-5 d-flex justify-content-around align-items-center">
            <div className="col-12 col-lg-6">
                  <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"  className="feature-img ">
                     <img src={feature} alt="" className='d-block w-100 rounded'/>
                  </div>
               </div>
               <div className="col-12 col-lg-6 ">

                <div className='ms-5'>
                <h2 className='h3 feature-title'> We will provide this things to our students</h2>
                  <div className="py-3 feature-text">
                  

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
            </div>
         </Container>
      </>
   );
};

export default Feature;