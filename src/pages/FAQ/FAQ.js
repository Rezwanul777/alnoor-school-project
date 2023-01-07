import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import faq from '../../images/faq.jpg'

const FAQ = () => {
   return (
      <>
        <Container className='mt-5'>
            <div className="row gx-lg-5  d-flex justify-content-around align-items-center">
            <h1 className="text-center text-success fw-bold fs-2 py-5">Frequently Asked Questions</h1>
            <div className='col-12 col-lg-6'>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
         <Accordion.Item eventKey="0">
         <Accordion.Header ><span className='lead'>Is it only arabic institution?</span></Accordion.Header>
         <Accordion.Body>
          <p className='lead'>The school is an English Medium,English Version & Arabic institution.It is basically Integreted with English Medium and English version.We will also provide Islamic Cultural
          sections like Qerat,Islamic Songs , Islamic Speech (Arabic & English) and Poetry Recitaion.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='lead'>What type of Curriculam has been provided?</span></Accordion.Header>
        <Accordion.Body>
          <p className='lead'>
          It is based on an Integrated Curriculam Cambridge, National-Engilsh Version, Noorani, Ebatedayee,Dakhil and International Arabic Education.We have emphasized at first on Kindergarten section (Session Januray to December) Play-Nursery-Kg Cambridge & Noorani Curriculam along with International Arabic Education 
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='lead'>Has the school residential facilities ?</span></Accordion.Header>
        <Accordion.Body>
          <p className='lead'>
         The school has good residential facilities.We provide Balanced & nutritious food,Neat & clean and well ventilated room, Pleasant and relaxed environment with sufficient play ground ,scheduled daily activity, special emphasis on Islamic cultural activities and sports,All time security arrangement, special program formoral development.
          </p>
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
