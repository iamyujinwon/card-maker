import React, { useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import logo from '../images/logo.svg';
import googleLogo from '../images/google_logo.png';
import githubLogo from '../images/github_logo.png';

const Login = ({ authService }) => {
  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [warningMsg, setWarningMsg] = useState('');
  const [showWarningMsg, setShowWarningMsg] = useState(false);

  const history = useHistory();
  const goToCards = (userId) => {
    history.push({
      pathname: '/cards',
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToCards(data.user.uid));
  };

  const onLoginWithEmailAndPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    authService //
      .loginWithEmailAndPassword(email, password)
      .then((data) => goToCards(data.user.uid))
      .catch((err) => {
        setShowWarningMsg(true);

        switch (err.code) {
          case 'auth/invalid-email':
            setWarningMsg('Invalid email');
            break;
          case 'auth/wrong-password':
            setWarningMsg('Wrong password');
            break;
          case 'auth/user-not-found':
            setWarningMsg('User not found');
            break;
          default:
            setWarningMsg('Email or password not correct');
            break;
        }
      });
  };

  // useEffect(() => {
  //   authService //
  //     .onAuthChange((user) => {
  //       user && goToMaker(user.uid);
  //     });
  // });

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <section className='flex flex-col items-center w-[28rem] rounded-xl bg-white text-center py-5 px-8 drop-shadow-md'>
        <img className='w-[5rem] mb-5' src={logo} alt='logo' />
        <span className='text-3xl font-extrabold'>Log In</span>
        <ul className='mt-7 w-full flex flex-col p-0'>
          <li className=''>
            <button
              className='space-x-2 flex justify-center items-center w-full bg-white border-[1px] border-gray-200 rounded-md py-3 mb-5 font-semibold pointer'
              onClick={onLogin}
            >
              <img className='w-[2rem]' src={googleLogo} alt='Google' />
              <span className=''>Sign up with Google</span>
            </button>
          </li>
          <li className=''>
            <button
              className='space-x-2 flex justify-center items-center w-full bg-white border-[1px] border-gray-200 rounded-md py-3 mb-5 font-semibold pointer'
              onClick={onLogin}
            >
              <img className='w-[1.8rem]' src={githubLogo} alt='Github' />
              <span className=''>Sign up with Github</span>
            </button>
          </li>
        </ul>
        <section className='w-full flex items-center space-x-3'>
          <hr className='w-full border-t-[1.5px] border-gray-200'></hr>
          <span className=''>OR</span>
          <hr className='w-full border-t-[1.5px] border-gray-200'></hr>
        </section>
        <form
          className='space-y-5 w-full m-5 flex flex-col text-left'
          ref={formRef}
        >
          {showWarningMsg && (
            <span className='flex items-center justify-center space-x-2 px-5 py-3 text-red-500 bg-red-100 rounded-sm'>
              <BsFillExclamationCircleFill />
              <div>{warningMsg}</div>
            </span>
          )}
          <div className='flex flex-col space-y-2'>
            <label className='font-bold'>Email</label>
            <input
              ref={emailRef}
              className='p-3 bg-white border-[1px] border-gray-200 rounded-md'
              type='text'
              name='email'
              placeholder='Enter email'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='font-bold'>Password</label>
            <input
              ref={passwordRef}
              className='p-3 bg-white border-[1px] border-gray-200 rounded-md'
              type='password'
              name='name'
              placeholder='Enter password'
            />
          </div>
          <button
            className='w-full py-3 border-[1px] border-[#FBBB71] rounded-md bg-[#FBBB71] font-bold  shadow-lg shadow-[#ffdfb8]'
            onClick={onLoginWithEmailAndPassword}
          >
            Log In
          </button>
          <div className='text-center text-gray-400 space-x-2'>
            <span>Don't have account?</span>
            <Link to='/register' className='text-gray-900'>
              Sign Up
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
