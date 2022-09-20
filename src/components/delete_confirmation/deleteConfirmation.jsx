import React from 'react';
import { MdClear, MdWarning } from 'react-icons/md';

const DeleteConfirmation = ({ card, deleteCard, showDeleteConfirm }) => {
  const removeCard = () => {
    deleteCard(card);
    showDeleteConfirm();
  };

  return (
    <section className='fixed top-0 left-0 w-full h-full z-30 flex justify-center items-center bg-gray-800/50'>
      <div className='bg-white mx-auto w-[22rem] sm:w-[28rem] p-5 rounded-lg space-y-7'>
        <div className='flex justify-between items-center text-xl sm:text-2xl font-bold'>
          <span>Delete Card</span>
          <button className='hover:text-gray-700' onClick={showDeleteConfirm}>
            <MdClear />
          </button>
        </div>
        <section className='flex justify-between items-center p-3 bg-red-100 rounded-lg'>
          <div className='basis-4/12 sm:basis-1/5 flex justify-center sm:text-2xl'>
            <MdWarning />
          </div>
          <div className='text-sm sm:text-base'>
            After you delete this card, it's permanently deleted from your
            account.
          </div>
        </section>
        <p className='text-sm sm:text-base'>
          Do you want to delete{' '}
          <span className='px-2 rounded-md bg-gray-100'>{card.name}</span> card?
        </p>
        <div className='flex justify-end space-x-5 text-sm sm:text-base'>
          <button className='hover:text-gray-700' onClick={showDeleteConfirm}>
            Cancel
          </button>
          <button
            className='px-5 py-2 bg-red-600 rounded-lg text-white hover:bg-red-700'
            onClick={removeCard}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteConfirmation;
