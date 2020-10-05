import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInDown } from 'react-animations';

const bounceTitle = keyframes`${bounceInDown}`;

const StyledTitle = styled.h1`
    font-size: 3rem;
    // animation: ${bounceTitle} 1s linear 0s 1 forwards;
    font-family: 'Roboto', sans-serif;

`;

const Title = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  return (
    <StyledTitle>{title}</StyledTitle>
  );
};

export default Title;
