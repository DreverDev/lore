"use client";
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { styled } from 'styled-components';
import { faBookJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from '../menu/MainMenu';
import Overlay from './Overlay';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  z-index: 15;
  background-color: ${props => props.theme.colors.primaryColor};
  height: ${props => props.theme.sizes.header};

  .header-title-wrapper{
    display: flex;
    align-items: center;
    margin-left: 30px;

    h1{
      padding: 15px;
    }

    svg{
      height: 30px;
    }
  }

`;

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <div className="hamburgerButton">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <div className='header-title-wrapper'>
        <div className='header-icon'>
          <FontAwesomeIcon icon={faBookJournalWhills} />
        </div>
        <h1>Lore App</h1>
      </div>
      <MainMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </StyledHeader>
  )
}

export default Header;
