import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // Toast message
  const showToastMessage = (event) => {
    event.preventDefault()
    toast.success('It will be Updated soon !', {
        position: toast.POSITION.TOP_RIGHT
      
    });
};
  return (
    <>
      <section className="contact-item py-5">
        <div className="container">
          <div className="row gx-lg-5 d-flex justify-content-around align-items-center">
            <div className="col">
              <div className="contact-text text-center mt-4">

                <h1 className=" mb-5 text-success">Write to us and we will contact you</h1>
              </div>
            </div>
          </div>
          <div className="row gx-5 ">

            <div className="col-12 col-lg-7">
              <div className="contact-form mt-4">
                <div className="card text-center border-0">
                  <div className="card-body">
                    <h4 className="mb-4">Send us a Message</h4>
                    <form action="#">
                      <input type="email" className="form-control form-control-lg mb-3" placeholder="Enter your Email" />
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <input type="text" placeholder="Name" className="form-control form-control-lg" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder="Phone-number" className="form-control form-control-lg" />

                        </div>
                      </div>
                      <textarea name="" className="form-control mb-3" placeholder="Message"></textarea>
                      <button onClick={showToastMessage} className="btn btn-info btn-lg mt-3 text-bg-success">Submit</button>
                    </form>
                    <ToastContainer />
                  </div>
                 
                </div>
              </div>
            </div>
            
{/* // right part */}
            <div class="col-12 col-lg-5 ">
              <h4 className='py-3'>Location</h4><hr />
              <div class="mt-4">
                <div class="d-flex">

                  <p ><Icon.GeoAltFill className='mx-2' size={30} style={{ 'color': "white" }} />Address: Rahman Nagor, Bogura Sadar-5800,Bogura,Bangladesh</p>
                </div><hr />
                <div class="d-flex">
                  <i class="bi bi-telephone-fill"></i>
                  <p><Icon.TelephoneFill className='mx-2' size={30} style={{ 'color': "white" }} />Contact :- 01715-110605,01793-127734,01770-377222</p>
                </div><hr />
                <div class="d-flex">

                  <p><Icon.EnvelopeAtFill className='mx-2' size={30} style={{ 'color': "white" }} />Email:- info.alnooris@gmail.com</p>
                </div><hr />
                <div class="d-flex">

                  <p><Icon.Facebook className='mx-2' size={30} style={{ 'color': "white" }} /><a href="https://www.facebook.com/HafezQariRajibBinBorhan " style={{ "text-decoration":"none" }}><span style={{ 'color': "white" ,"text":"hover"}}>
                  Facebook:Al Noor International School</span></a></p>
                </div>
                <hr />
              </div>
            </div>
          </div>

        </div>
        
      </section>
    </>

  );
};

export default Contact;