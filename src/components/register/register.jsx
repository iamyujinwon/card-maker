import React, { useEffect, useRef } from 'react';
import styles from './register.module.css';
import logo from '../images/logo.svg';
import { useHistory, Link } from 'react-router-dom';

const Register = ({ authService }) => {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const history = useHistory();
  const goToRegisterSuccess = () => {
    history.push({
      pathname: '/register_success',
    });
  };

  const onRegister = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    authService //
      .register(emailRef.current.value, passwordRef.current.value)
      .then(() => goToRegisterSuccess());
  };

  // useEffect(() => {
  //   authService //
  //     .onAuthChange((user) => {
  //       user && goToMaker(user.uid);
  //     });
  // });

  return (
    <section className={styles.registerSection}>
      <img className={styles.logo} src={logo} alt='logo' />
      <span className={styles.registerTitle}>Register</span>
      <form className={styles.form} ref={formRef}>
        <div className={styles.customField}>
          <label className={styles.label}>Email</label>
          <input
            ref={emailRef}
            className={styles.input}
            type='text'
            name='email'
            placeholder='Enter email'
          />
        </div>
        <div className={styles.customField}>
          <label className={styles.label}>Password</label>
          <input
            ref={passwordRef}
            className={styles.input}
            type='password'
            name='name'
            placeholder='Enter password'
          />
        </div>
        <div className={styles.customField}>
          <label className={styles.label}>Confirm password</label>
          <input
            ref={confirmPasswordRef}
            className={styles.input}
            type='password'
            name='name'
            placeholder='Enter password'
          />
        </div>
        <button className={styles.loginBtn} onClick={onRegister}>
          Register
        </button>
      </form>
      <div className={styles.logIn}>
        Have account?
        <Link to='/' className={styles.toLogIn}>
          Log In
        </Link>
      </div>
    </section>
  );
};

export default Register;
