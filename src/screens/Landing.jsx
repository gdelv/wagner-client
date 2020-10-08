import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import services from '../data';

const LandingContainer = styled.div`
  padding-bottom: 2em;
`

const Landing = () => (
  <LandingContainer>
    <Carousel />
    <Grid cardsArr={services} />
  </LandingContainer>
);

export default Landing;
