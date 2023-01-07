import React from 'react';

const About = ({man}) => {
   const {img,name,title,text}=man
   return (
      <div className="col-xl-4 col-md-6 col-sm-6 mb-4 ">
      <div className="card mt-4 border-0 shadow" >
        <div className="row g-0">
         <div className='col-md-4'>
      <img src={img} className="img-fluid rounded-start h-100" alt="..."/>
      </div>
      <div className='col-md-8'>
      <div className="card-body ">
        <h3 className="card-title">{name}</h3>
        <h4 className="card-title1">{title}</h4>
        <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
    </div>
    </div>
   
  
     
   );
};

export default About;

