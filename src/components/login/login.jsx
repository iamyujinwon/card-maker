import React from 'react';
import styles from './login.module.css';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import Character from '../../images/character.svg';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent);
  };
  return (
    <>
      <img src={Character} alt='character' />
      <section className={styles.login}>
        <span className={styles.loginTitle}>Login</span>
        <p className={styles.loginInfo}>Choose your login method</p>
        <ul className={styles.loginProviders}>
          <li className={styles.loginProvider}>
            <button className={styles.button} onClick={onLogin}>
              <BsGoogle />
              <span className={styles.providerName}>Google</span>
            </button>
          </li>
          <li className={styles.loginProvider}>
            <button className={styles.button} onClick={onLogin}>
              <BsGithub />
              <span className={styles.providerName}>Github</span>
            </button>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Login;
