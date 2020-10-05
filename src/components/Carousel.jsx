/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic4 from '../images/kitchen1.jpg';
import pic1 from '../images/kitchen3.jpg';
import pic2 from '../images/kitchen2.jpg';
import pic3 from '../images/kitchen4.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={pic4} width="100%" height="700px" alt="carousel" />
      </div>
      <div>
        <img src={pic2} width="100%" height="700px" alt="carousel" />
      </div>
      <div>
        <img src={pic3} width="100%" height="700px" alt="carousel" />
      </div>
      <div>
        <img src={pic1} width="100%" height="700px" alt="carousel" />
      </div>
    </Slider>
  );
};
export default Carousel;
