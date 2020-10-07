import React from 'react';
import styled from 'styled-components';
import Title from './Title';


const Card = (props) => {
    const { service, image, link } = props.card
    const CardContainer = styled.div`
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        height: 20vh;
        background-image: url(${image});
        background-size: cover;
        background-position: center; 
        background-repeat: no-repeat; 
    `
    return (
        <CardContainer>
            <Title title={service} backColor='white' size='20px' />
        </CardContainer>
    )
}

export default Card
