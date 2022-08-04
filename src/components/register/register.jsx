import React, { useEffect, useState, useRef } from 'react';
import styles from './register.module.css';
import logo from '../images/logo.svg';
import { useHistory, Link } from 'react-router-dom';

const Register = ({ authService }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const history = useHistory();
  const goToRegisterSuccess = () => {
    history.push({
      pathname: '/register_success',
    });
  };

  const [warning, setWarning] = useState('');

  const onRegister = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (
      checkEmptyValue(email, password, confirmPassword) &&
      checkPasswordLength(password) &&
      checkPassowordsMatch(password, confirmPassword)
    ) {
      authService //
        .register(email, password, name)
        .then(() => goToRegisterSuccess());
    }
  };

  const checkEmptyValue = (email, password, confirmPassword) => {
    if (email === '' || password === '' || confirmPassword === '') {
      setWarning('Empty field is not allowed');
      return false;
    }
    return true;
  };

  const checkPasswordLength = (password) => {
    if (password.length < 6) {
      setWarning('Password should be at least 6 characters');
      return false;
    }
    return true;
  };

  const checkPassowordsMatch = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setWarning('Passwords do not match');
      return false;
    }
    return true;
  };

  return (
    <section className={styles.registerSection}>
      <img className={styles.logo} src={logo} alt='logo' />
      <span className={styles.registerTitle}>Register</span>
      {warning && <div className={styles.warning}>{warning}</div>}
      <form className={styles.form} ref={formRef}>
        <div className={styles.customField}>
          <label className={styles.label}>Name</label>
          <input
            ref={nameRef}
            className={styles.input}
            type='text'
            name='name'
            placeholder='Enter name'
          />
        </div>
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
