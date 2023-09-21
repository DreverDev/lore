"use client";
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { faEarthEurope as faIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from '../menu/MainMenu';
import Overlay from '../menu/Overlay';

import styles from '@/styles/components/header/Header.module.scss';

const Header = () => {

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
          <MainMenu />
        </div>
      </div>
    </header>
  )
}

export default Header;
