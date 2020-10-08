import React from 'react';
import styled from 'styled-components';


const Image = (props) => {
    const { src } = props;
    const StyledImage = styled.img`
    display: block;
    max-width: 100%;
    max-height: 500px;
    margin: 2em 0;
    `
    return (
        <StyledImage src={src} />
    )
}

export default Image
