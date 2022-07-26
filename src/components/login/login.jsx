import React from 'react';
import styles from './login.module.css';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import Character from '../../images/character.svg';

const Login = () => {
  return (
    <>
      <img src={Character} alt='character' />
      <section className={styles.loginCard}>
        <div className={styles.login}>
          <span>Login</span>
          <p>Choose your login method</p>
          <div className={styles.loginChoice}>
            <div>
              <BsGoogle />
              <span>Google</span>
            </div>
            <div>
              <BsGithub />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
