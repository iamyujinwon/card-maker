import React from 'react';
import styles from './header.module.css';
import logo from '../images/logo.svg';

const Header = ({ onLogout }) => {
  return (
    <section className={styles.header}>
      <img className={styles.logo} src={logo} alt='logo' />
      <button className={styles.button} onClick={onLogout}>
        <span>Log out</span>
      </button>
    </section>
  );
};

export default Header;
