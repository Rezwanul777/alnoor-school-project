import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import faq from '../../images/faq.jpg'

const FAQ = () => {
   return (
      <>
        <Container className='mt-5'>
            <div className="row gx-lg-5  d-flex justify-content-around align-items-center">
            <h1 className="text-center fw-bold fs-2 py-5">Frequently Asked Questions</h1>
            <div className='col-12 col-lg-6'>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
         <Accordion.Item eventKey="0">
         <Accordion.Header>Accordion Item #1</Accordion.Header>
         <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
            <div className='col-12 col-lg-6'>
               <div className="faq-side">
                  <img src={faq} alt="img not found" className='img-fluid' />
               </div>
            </div>
            
            </div>
         </Container>
      </>
   );
};

export default FAQ;
