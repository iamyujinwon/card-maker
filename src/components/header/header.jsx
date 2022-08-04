import React, { memo, useState } from 'react';
import styles from './header.module.css';
import logo from '../images/logo.svg';
import { FiLogOut } from 'react-icons/fi';

const Header = memo(({ onLogout, currentUserName }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const firstLetter = currentUserName[0];

  const onClick = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <section className={styles.header}>
      <img className={styles.logo} src={logo} alt='logo' />
      <button className={styles.profile} onClick={onClick}>
        <div className={styles.displayName}>{currentUserName}</div>
        <div className={styles.firstLetter}>{firstLetter}</div>
      </button>
      {showDropDown && (
        <section className={styles.popUp}>
          <div className={styles.logOut} onClick={onLogout}>
            <FiLogOut />
            <span>Log out</span>
          </div>
          <div className={styles.owner}>by Yujin Won</div>
        </section>
      )}
    </section>
  );
});

export default Header;
