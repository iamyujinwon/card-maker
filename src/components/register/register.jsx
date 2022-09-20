import React, { useState, useRef } from 'react';
import logo from '../images/logo.svg';
import { useHistory, Link } from 'react-router-dom';

const Register = ({ authService }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [warningMsg, setWarningMsg] = useState('');
  const [showWarningMsg, setShowWarningMsg] = useState(false);

  const history = useHistory();
  const goToCards = (userId) => {
    history.push({
      pathname: '/cards',
      state: { id: userId },
    });
  };

  const onRegister = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name === '') {
      setShowWarningMsg(true);
      setWarningMsg('Name should not be empty');
    } else {
      authService //
        .register(email, password, name)
        .then(() => goToCards())
        .catch((err) => {
          console.log(err.code);
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
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <section className='flex flex-col items-center w-[28rem] rounded-xl bg-white text-center py-5 px-8 drop-shadow-md'>
        <img className='w-[5rem] mb-5' src={logo} alt='logo' />
        <span className='text-3xl font-extrabold'>Register</span>
        {showWarningMsg && (
          <div className='text-red-600 mt-3'>{warningMsg}</div>
        )}
        <form
          className='space-y-5 w-full m-5 flex flex-col text-left'
          ref={formRef}
        >
          <div className='flex flex-col space-y-2'>
            <label className='font-bold'>Name</label>
            <input
              ref={nameRef}
              className='p-3 bg-white border-[1px] border-gray-200 rounded-md'
              type='text'
              name='name'
              placeholder='Enter name'
            />
          </div>
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
              name='password'
              autoComplete='on'
              placeholder='Enter password'
            />
          </div>
          <button
            className='w-full py-3 border-[1px] border-[#FBBB71] rounded-md bg-[#FBBB71] font-bold  shadow-lg shadow-[#ffdfb8]'
            onClick={onRegister}
          >
            Register
          </button>
        </form>
        <div className='text-center text-gray-400 space-x-2'>
          <span>Have account?</span>
          <Link to='/' className='text-gray-900'>
            Log In
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Register;
