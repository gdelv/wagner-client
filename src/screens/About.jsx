import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from '../components/Image';
import pic from '../images/kitchen3.jpg';
import Title from '../components/Title'


const About = () => (
  <Container padding='1em'>
    <Flex justify='center'>
      <Image src={pic} />
      <Title padding='.5em 0' size='1.5rem' title='Welcome Wagner Solids' align='center'/>
      <Title padding='.25em 0' align='center' size='1rem' title='We specialize in residential and commercial custom interior stone and woodwork design'/>
      <Title padding='.25em 0' align='center' size='1rem' title='We provide high end designs at an affordable price. Our service starts with our customers.'/>
      <Title padding='.25em 0' align='center' size='1rem' title='We embrace the best manufacturing practices and strive to bring value to you, our customer.'/>
      <Title padding='.25em 0' align='center' size='1rem' title='At Wagner Solids, We promise to make the transformation of your dreams into reality.'/>
    </Flex>
  </Container>
);

export default About;
