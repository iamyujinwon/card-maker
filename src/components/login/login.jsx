import React, { useEffect, useRef } from 'react';
import styles from './login.module.css';
import logo from '../images/logo.svg';
import googleLogo from '../images/google_logo.png';
import githubLogo from '../images/github_logo.png';
import { useHistory, Link } from 'react-router-dom';

const Login = ({ authService }) => {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

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

  const onLoginWithEmailAndPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    authService //
      .loginWithEmailAndPassword(email, password)
      .then((data) => goToMaker(data.user.uid));
  };

  // useEffect(() => {
  //   authService //
  //     .onAuthChange((user) => {
  //       user && goToMaker(user.uid);
  //     });
  // });

  return (
    <section className={styles.loginSection}>
      <img className={styles.logo} src={logo} alt='logo' />
      <span className={styles.loginTitle}>Log In</span>
      <ul className={styles.loginProviders}>
        <li className={styles.loginProvider}>
          <button className={styles.button} onClick={onLogin}>
            <img className={styles.google} src={googleLogo} alt='Google' />
            <span className={styles.providerName}>Sign up with Google</span>
          </button>
        </li>
        <li className={styles.loginProvider}>
          <button className={styles.button} onClick={onLogin}>
            <img className={styles.github} src={githubLogo} alt='Github' />
            <span className={styles.providerName}>Sign up with Github</span>
          </button>
        </li>
      </ul>
      <section className={styles.divideSection}>
        <hr className={styles.divider}></hr>
        <span className={styles.dividerOr}>OR</span>
        <hr className={styles.divider}></hr>
      </section>
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
        <button
          className={styles.loginBtn}
          onClick={onLoginWithEmailAndPassword}
        >
          Log In
        </button>
        <div className={styles.signUp}>
          Don't have account?
          <Link to='/register' className={styles.toRegister}>
            Sign Up
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
