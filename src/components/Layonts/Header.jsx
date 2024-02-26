import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-image']}></div>

      <div className={styles['navigation-container']}>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
