import React from 'react';
import man1 from '../../images/anik.jpeg'
import man2 from '../../images/rajib.jpeg'
import man3 from '../../images/rakibur.jpeg'
import About from './About';

const Abouts = () => {
   const men=[
      {id:1,name:'Anikur Rahman',img:man1,title:"Principle",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam vero architecto tenetur deleniti vel praesentium beatae quis magni fugit ducimus explicabo quos eum facilis placeat, velit, harum atque odio unde?"},
      {id:2,name:'Rajib',img:man2,title:"Vice-Principle",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam vero architecto tenetur deleniti vel praesentium beatae quis magni fugit ducimus explicabo quos eum facilis placeat, velit, harum atque odio unde?"},
      {id:3,name:'Rashedin',img:man3,title:"Vice-Principle",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam vero architecto tenetur deleniti vel praesentium beatae quis magni fugit ducimus explicabo quos eum facilis placeat, velit, harum atque odio unde?"},
   
   
   ]
   return (
      <div id="about" className='container'>
      <h2 className='text-primary text-center mt-5'>Our Mission and Vission</h2>
      <div className="row mt-4">
      {
         men.map(man=><About key={man.id}man={man}></About>)
      }
      </div>     
   </div>
   );
};

export default Abouts;