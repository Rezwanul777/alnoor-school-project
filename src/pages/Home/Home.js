import React from 'react';

import Abouts from '../Abouts/Abouts';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import Footer from '../footer/Footer';
import Banner from './Banner';
import Feature from './features/Feature';

const Home = () => {
   return (
      <div>
         <Banner/>
         <Feature/>
         <Abouts/>
   
         <FAQ/>
         <Contact/>
         <Footer/>
      </div>
   );
};

export default Home;