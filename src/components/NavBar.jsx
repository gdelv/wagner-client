import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { merge, tada, flip } from 'react-animations';
import logo from '../images/wIcon.png';
import Hamburger from './Hamburger';
import Title from './Title';

const tadaFlip = merge(flip, tada);

const bounceModal = keyframes`${tadaFlip}`;

const StyledNav = styled.nav`
    max-width: 100%;
    height: 12vh;
    background: #ee3225;
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    overflow: hidden;

`;
const LogoImg = styled.img`
    width: 100px;
    position: relative;
    top: 2vh;
    height: 8vh;
`;

const NavBar = () => {
  const [buttonClassName, setButtonClassName] = useState('circle icon');
  const [modal, setModal] = useState(false);
  const changeClassName = () => (buttonClassName === 'circle icon' ? setButtonClassName('circle icon close') : setButtonClassName('circle icon'));
  const handleModal = () => {
    changeClassName();
    setModal(!modal);
  };
  const StyledModal = styled.div`
    height: 90vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    background: black;
    opacity: .93;
    color: white;
    z-index: 9999;
    overflow: hidden;
    border-top: .1px solid darkgray;
    animation: ${bounceModal} 1.5s linear .3s 1 forwards;
`;

  const renderMainLinks = () => (
    <StyledNav>
      <div>
        <LogoImg src={logo} />
      </div>
      <Hamburger
        buttonClassName={buttonClassName}
        handleModal={handleModal}
      />
    </StyledNav>
  );
  // eslint-disable-next-line consistent-return
  const renderModal = () => {
    if (modal) {
      return (
        <StyledModal>
          <Title title="About" />
          <Title title="Projects" />
          <Title title="Showroom" />
          <Title title="Contact" />
        </StyledModal>
      );
    }
  };
  return (
    <>
      { renderMainLinks()}
      { renderModal()}
    </>
  );
};

export default NavBar;
