import React from 'react';
import MapContainer from '../components/MapContainer';
import Container from '../components/Container'
import Flex from '../components/Flex'
import Title from '../components/Title'


const Contact = () => (
  <Container padding='2em 1em'>
    <Title size='2.5rem' padding='.5em' title='Contact Info' />
    <Flex>
      <MapContainer latitude="40.655110" longitude="-73.607900"/>
      <Title size='2rem' padding='.5em' title='Wagner Solids - NY'/>
      <Title size='1.5rem' padding='.25em' title='2285 Harrison Ave' />
      <Title size='1.5rem' padding='.25em' title='Baldwin, NY 11510' />
      <Title size='1.5rem' padding='.25em' title='wagnersolids@gmail.com' />
      <Title size='1.5rem' padding='.25em' title='516-864-3657' />
    </Flex>
  </Container>
);

export default Contact;
