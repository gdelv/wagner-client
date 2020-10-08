import React from 'react';
import styled from 'styled-components';


const Title = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, backColor, size, align, padding } = props;
  const StyledTitle = styled.h1`
      font-size: ${size};
      border-radius: 20%;
      margin: 0 auto;
      text-align: ${align}; 
      padding: ${padding};
      min-width: fit-content;
      // change max-width
      max-width: 120px;
      font-family: 'Roboto', sans-serif;
      background: ${backColor};
      word-wrap: break-word;

  `;
  return (
    <StyledTitle>{title}</StyledTitle>
  );
};

export default Title;
