import React from 'react';
import styles from './registerSuccess.module.css';
import logo from '../images/logo.svg';
import check from '../images/check.svg';
import { useHistory } from 'react-router-dom';

const RegisterSuccess = (props) => {
  const history = useHistory();
  const goToLogin = () => {
    history.push({
      pathname: '/',
    });
  };

  return (
    <section className={styles.section}>
      <img className={styles.logo} src={logo} alt='logo' />
      <section className={styles.messageSection}>
        <img className={styles.check} src={check} alt='check' />
        <div className={styles.checkAnimation}></div>
        <div>Congratulation!</div>
        <p>Your account has been successfully created.</p>
      </section>
      <button className={styles.button} onClick={goToLogin}>
        Go to Sign In
      </button>
    </section>
  );
};

export default RegisterSuccess;
