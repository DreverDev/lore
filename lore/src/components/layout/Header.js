import { Turn as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { styled } from 'styled-components';
import { faBookJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from '../menu/MainMenu';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  z-index: 15;
  background-color: ${props => props.theme.colors.primaryColor};
  height: ${props => props.theme.sizes.header};
`

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  h1{
    padding: 15px;
  }

  svg{
    min-height: 30px;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <div className="hamburgerButton">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      <StyledTitle>
        <div>
          <FontAwesomeIcon icon={faBookJournalWhills} />
        </div>
        <h1>Lore App</h1>
      </StyledTitle>
      <MainMenu className="main-menu" isOpen={isOpen} setIsOpen={setIsOpen}/>
    </StyledHeader>
  )
}

export default Header;
