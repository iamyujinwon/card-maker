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
      <section className={styles.loginSection}>
        <div className={styles.login}>
          <span>Login</span>
          <p>Choose your login method</p>
          <ul className={styles.loginProviders}>
            <li className={styles.loginProvider}>
              <button onClick={onLogin}>
                <BsGoogle />
                <span>Google</span>
              </button>
            </li>
            <li className={styles.loginProvider}>
              <button onClick={onLogin}>
                <BsGithub />
                <span>Github</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Login;
