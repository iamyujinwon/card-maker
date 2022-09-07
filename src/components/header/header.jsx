import React, { memo, useState } from 'react';
import logo from '../images/logo.svg';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const Header = memo(({ onLogout, currentUserName }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const firstLetter = currentUserName[0];

  const onClick = () => {
    setShowDropDown(!showDropDown);
  };

  const history = useHistory();
  const goToCards = () => {
    history.push({
      pathname: '/cards',
    });
  };

  return (
    <section className='fixed top-0 left-0 bg-white w-full flex px-5 py-3 justify-between items-center z-20 border-b-[1px] boder-b-gray-500 md:px-24'>
      <img
        className='w-[5rem] cursor-pointer'
        src={logo}
        alt='logo'
        onClick={goToCards}
      />
      <button
        className='space-x-2 flex items-center px-4 py-2 rounded-full font-bold cursor-pointer border-none hover:bg-gray-100'
        onClick={onClick}
      >
        <div>{currentUserName}</div>
        <div className='bg-amber-500 flex justify-center items-center w-8 h-8 rounded-full text-white'>
          {firstLetter}
        </div>
      </button>
      {showDropDown && (
        <section className='absolute top-[110%] right-7 bg-white rounded-lg border-none drop-shadow-2xl overfol'>
          <div
            className='flex items-center justify-center space-x-2 py-6 px-8 hover:bg-amber-50'
            onClick={onLogout}
          >
            <FiLogOut />
            <span>Log out</span>
          </div>
          <div className='text-center border-t-[1px] border-t-gray-200 py-3 text-sm'>
            by Yujin Won
          </div>
        </section>
      )}
    </section>
  );
});

export default Header;
