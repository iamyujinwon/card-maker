import React, { useEffect } from 'react';
import styles from './login.module.css';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import logo from '../images/logo.svg';
import { useHistory } from 'react-router-dom';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.uid);
      });
  });

  return (
    <section className={styles.login}>
      <img className={styles.logo} src={logo} alt='logo' />
      <section className={styles.loginSection}>
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
    </section>
  );
};

export default Login;
