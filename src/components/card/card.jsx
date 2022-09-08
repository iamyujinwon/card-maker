import React, { memo } from 'react';
import character from '../images/default_logo.png';
import { MdDelete, MdEdit, MdDownload } from 'react-icons/md';
import { Link, useRouteMatch } from 'react-router-dom';

const DEFAULT_IMAGE = character;

const Card = memo(({ card, deleteCard }) => {
  const { path, url } = useRouteMatch();
  const { name, company, title, email, message, theme, fileURL } = card;
  const fileUrl = fileURL || DEFAULT_IMAGE;

  const onDelete = () => {
    deleteCard(card);
  };

  return (
    <li
      className='w-[22rem] h-52 sm:w-[26rem] sm:h-60 relative flex items-center rounded-lg mb-5 py-8 px-6 drop-shadow-xl transition duration-300 ease-in-out delay-50 hover:-translate-y-2'
      style={{ backgroundColor: theme }}
    >
      <section className='absolute flex flex-col justify-center top-0 right-0 text-3xl bg-[black] h-full z-10 p-2 rounded-tr-lg rounded-br-lg opacity-0 transition duration-300 hover:opacity-100'>
        <div
          className='w-16 h-16 flex justify-center items-center cursor-pointer text-white transition duration-200 hover:text-[#FEC583]'
          onClick={onDelete}
        >
          <MdDelete />
        </div>
        <Link
          to={`${url}/${card.id}`}
          className='w-16 h-16 flex justify-center items-center cursor-pointer text-white transition duration-200 hover:text-[#FEC583]'
        >
          <MdEdit />
        </Link>
        <div className='w-16 h-16 flex justify-center items-center cursor-pointer text-white transition duration-200 hover:text-[#FEC583]'>
          <MdDownload />
        </div>
      </section>
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

export default Card;
