import React, { memo } from 'react';
import character from '../images/default_logo.png';

const DEFAULT_IMAGE = character;

const CardPreview = memo(({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const fileUrl = fileURL || DEFAULT_IMAGE;

  return (
    <li
      className='w-[22rem] h-52 sm:w-[26rem] sm:h-60 relative flex items-center rounded-lg mb-5 py-8 px-6 shadow-xl transition duration-300 ease-in-out delay-50 hover:-translate-y-2'
      style={{ backgroundColor: theme }}
    >
      <section className='flex items-center space-x-6'>
        <img
          className='w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full'
          src={fileUrl}
          alt='profile'
        />
        <div className='space-y-2'>
          <h1 className='sm:text-xl font-bold'>{name}</h1>
          <p className='text-sm sm:text-base'>{company}</p>
          <hr className='w-48 sm:w-52 border-gray-900 border-b rounded-full'></hr>
          <p className='text-sm sm:text-base'>{title}</p>
          <p className='text-sm sm:text-base'>{email}</p>
          <p className='text-sm sm:text-base'>{message}</p>
        </div>
      </section>
    </li>
  );
});

export default CardPreview;
