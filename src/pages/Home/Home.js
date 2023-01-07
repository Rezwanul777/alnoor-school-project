import React from 'react';
import Abouts from '../Abouts/Abouts';
import Banner from './Banner';
import Feature from './features/Feature';

const Home = () => {
   return (
      <div>
         <Banner/>
         <Feature/>
         <Abouts/>
      </div>
   );
};

export default Home;