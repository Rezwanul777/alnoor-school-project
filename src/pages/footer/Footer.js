import React from 'react';

const Footer = () => {
   const today=new Date()
   const year=today.getFullYear()
   return (
      <footer className="container-fluid">
    <div className="footer-part d-flex align-items-center justify-content-around">
      
         <p>Copyright ©{year} All rights reserved | Rezwan </p>
     
      </div>
     
  </footer>
   );
};

export default Footer;