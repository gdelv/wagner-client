import React from 'react';
import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import services from '../data'

const Landing = () => (
  <div>
    <Carousel />
    <Grid cardsArr={services} />
  </div>
);

export default Landing;
