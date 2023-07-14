"use client";
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { faEarthEurope as faIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from '../menu/MainMenu';
import Overlay from '../menu/Overlay';

import styles from '@/styles/components/header/Header.module.scss';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerTopBar}>
        <div className={styles.headerTitleWrapper}>
          <div className={styles.headerIcon}>
            <FontAwesomeIcon icon={faIcon} />
          </div>
          <h1>Atlas Mundus</h1>
        </div>
        <div>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>

      <MainMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}

export default Header;
