import React from 'react';
import Card from '../card/card';
import { RiAddCircleFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

const CardsList = ({ cards, deleteCard }) => {
  const history = useHistory();

  const goToCardNew = () => {
    history.push({
      pathname: '/cards/new',
    });
  };

  return (
    <>
      <section className='mt-20'>
        <section className='space-x-6 md:space-x-8 px-8 py-10 flex sm:flex-row items-center lg:px-32 2xl:px-44'>
          <div className='text-3xl sm:text-4xl md:text-5xl font-bold'>
            My Cards
          </div>
          <div
            className='text-sm sm:text-base space-x-2 flex items-center bg-[black] text-white py-2 px-6 rounded-full cursor-pointer hover:bg-gray-900'
            onClick={goToCardNew}
          >
            <div>Add Card</div>
            <RiAddCircleFill />
          </div>
        </section>
        <div className='bg-white py-10 flex flex-col justify-center items-center lg:px-32 2xl:px-44 lg:grid lg:grid-cols-2 lg:gap-4 2xl:gap-6 2xl:grid-cols-3'>
          {Object.keys(cards).length === 0 ? (
            <div className='flex justify-center items-center text-lg'>
              No cards
            </div>
          ) : (
            Object.keys(cards).map((key) => (
              <Card key={key} card={cards[key]} deleteCard={deleteCard} />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default CardsList;
