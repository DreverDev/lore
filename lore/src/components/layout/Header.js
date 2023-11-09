import { faEarthEurope as faIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from '../menu/MainMenu';

import styles from '@/styles/components/header/Header.module.scss';

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.headerTopBar}>
        <div className={styles.headerTitleWrapper}>
          <div className={styles.headerIcon}>
            <FontAwesomeIcon icon={faIcon} />
          </div>
          <h1>Wolf Tales</h1>
        </div>
        <div>
          <MainMenu />
        </div>
      </div>
    </header>
  )
}

export default Header;
