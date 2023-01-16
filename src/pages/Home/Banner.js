import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg';

const Banner = () => {
   const [index, setIndex] = useState(0);
   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };
   return (
      <div className="">
        <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item interval={1000} className="slider-section">
      <img
          className="d-block w-100 h-100vh"
          src={banner1}
          alt="Second slide"
        />
        <Carousel.Caption  className="slider-text mb-5">
          <h3 className="display-5">AL NOOR INTERNATIONAL SCHOOL</h3>
          <p className="h4 mt-1">An English Medium,English Version & Arabic Institution</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} className="slider-section ">
        <img
          className="d-block w-100 h-100vh"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption className="slider-text mb-5">
          <h3 className="display-5">AL NOOR INTERNATIONAL SCHOOL</h3>
          <p className="h4 mt-1">Play-Nursery-KG Cambridge & Noorani Curriculam along with International Arabic Education.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-section">
        <img
          className="d-block w-100 h-100vh"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption interval={500} className="slider-text mb-5">
          <h3 className="display-5">AL NOOR INTERNATIONAL SCHOOL</h3>
          <p className="h4 mt-1">
            Enlish Version along with an effective combination of Ebtedayee,Dakhil and International Arabic Education.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
      </div>
   );
};

export default Banner;