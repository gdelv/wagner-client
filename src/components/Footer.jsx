import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const StyledFooter = styled.footer`
    width: 100%;
    background: black;
    color: white;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <Title title="Created by Giusseppe" size='1rem'/>
        </StyledFooter>
    )
}

export default Footer
