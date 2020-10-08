import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import { merge, tada, flip } from 'react-animations';
import logo from '../images/wIcon.png';
import Hamburger from './Hamburger';
import { Primary, Secondary, White } from '../colors';

const tadaFlip = merge(flip, tada);

const bounceModal = keyframes`${tadaFlip}`;

const StyledNav = styled.nav`
    max-width: 100%;
    height: 12vh;
    background: ${Primary};
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    overflow: hidden;

`;
const LogoImg = styled.img`
    width: 100px;
    position: relative;
    height: 12vh;
`;

const NavBar = () => {
  const [buttonClassName, setButtonClassName] = useState('circle icon');
  const [modal, setModal] = useState(false);
  const changeClassName = () => (buttonClassName === 'circle icon' ? setButtonClassName('circle icon close') : setButtonClassName('circle icon'));
  const handleModal = () => {
    changeClassName();
    setModal(!modal);
  };
  const handleLogo = () => {
    if (modal) {
      changeClassName();
      setModal(false);
    }
  }
  const StyledModal = styled.div`
    height: 90vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    background: ${Secondary};
    opacity: .93;
    color: white;
    z-index: 9999;
    overflow: hidden;
    border-top: .1px solid darkgray;
    animation: ${bounceModal} 1.5s linear .3s 1 forwards;
`;

  const renderMainLinks = () => (
    <StyledNav>
      <Link exact to='/' onClick={handleLogo} >
        <LogoImg src={logo} />
      </Link>
      <Hamburger
        buttonClassName={buttonClassName}
        handleModal={handleModal}
      />
    </StyledNav>
  );
  // eslint-disable-next-line consistent-return
  const renderModal = () => {
    const linkStyle = {
      color: White,
      textDecoration: 'none',
      fontSize: '2em',
      // border: '1px solid white',
    }
    if (modal) {
      return (
        <StyledModal>
          <Link exact to ='/about' onClick={handleModal} style={linkStyle} >About</Link>
          <Link exact to ='/projects' onClick={handleModal} style={linkStyle}  >Projects</Link>
          <Link exact to ='/gallery' onClick={handleModal} style={linkStyle}  >Gallery</Link>
          <Link exact to ='/contact' onClick={handleModal} style={linkStyle} >Contact</Link>
        </StyledModal>
      );
    }
  };
  return (
    <>
      { renderMainLinks() }
      { renderModal() }
    </>
  );
};

export default NavBar;
