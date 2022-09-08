import React from 'react';
import { Link } from 'react-router-dom';
import CardAddForm from '../card_add_form/cardAddForm';
import { IoIosArrowBack } from 'react-icons/io';

const CardAdd = ({ FileInput, addCard }) => {
  return (
    <div className='mt-20 flex flex-col'>
      <div className='p-5 border-b sm:py-5 sm:px-10 bg-white space-y-8 xl:space-y-0 xl:w-1/3 xl:h-full xl:fixed xl:border-b-none xl:border-r'>
        <section className='flex flex-col space-y-8'>
          <Link to='/cards' className='flex items-center space-x-1'>
            <IoIosArrowBack />
            <span className='font-bold'>My Cards</span>
          </Link>
          <span className='text-4xl font-bold'>Create new card</span>
        </section>
      </div>
      <section className='py-10 xl:w-2/3 xl:absolute xl:top-20 xl:left-1/3 xl:bg-[#F2F0E8] xl:px-64 xl:py-20'>
        <CardAddForm FileInput={FileInput} onAdd={addCard} />
      </section>
    </div>
  );
};

export default CardAdd;
