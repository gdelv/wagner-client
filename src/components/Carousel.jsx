/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Carousel.css'
import pic4 from '../images/kitchen1.jpg';
import pic1 from '../images/kitchen3.jpg';
import pic2 from '../images/kitchen2.jpg';
import pic3 from '../images/kitchen4.jpg';

const Carousel = () => {
  const SliderContainer = styled.div`
    z-index:1;
  `
  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "carousel-container"
  };
  return (
    <Slider {...settings}>
      <SliderContainer>
        <img src={pic4} width="100%" height='500px' alt="carousel" />
      </SliderContainer>
      <SliderContainer>
        <img src={pic2} width="100%" height='500px' alt="carousel" />
      </SliderContainer>
      <SliderContainer>
        <img src={pic3} width="100%" height='500px' alt="carousel" />
      </SliderContainer>
      <SliderContainer>
        <img src={pic1} width="100%" height='500px' alt="carousel" />
      </SliderContainer>
    </Slider>
  );
};
export default Carousel;
