import React from 'react';
import styled from 'styled-components';


const Container = (props) => {
    const { children, margin, padding, background } = props;
    const StyledContainer = styled.div`
        margin: ${margin};
        padding: ${padding};
        background: ${background};
    `
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container
