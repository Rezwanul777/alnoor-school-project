import React from 'react';

const Contact = () => {
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
        <div className="row">
         
          <div className="col-12 col-lg-6">
            <div className="contact-form mt-4">
              <div className="card text-center border-0">
                <div className="card-body">
                  <h4 className="mb-4">Send us a Message</h4>
                  <form action="#">
                    <input type="email" className="form-control form-control-lg mb-3" placeholder="Enter your Email"/>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <input type="text" placeholder="Name" className="form-control form-control-lg"/>
                      </div>
                      <div className="col-md-6">
                        <input type="text" placeholder="Phone-number" className="form-control form-control-lg"/>
  
                      </div>
                    </div>
                    <textarea name="" className="form-control mb-3" placeholder="Message"></textarea>
                    <button className="btn btn-info btn-lg mt-3 text-bg-success">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
          <div className="address-form mt-4">
              <div className="card text-start border-0">
                <div className="card-body">
                  <h4 className="mb-4">location</h4>
                  <p>Rahman Nagor, Bogura Sadar-5800,Bogura,Bangladesh</p>
                  <p>Follow us</p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
    </section>
      </>
     
   );
};

export default Contact;