import React from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import Card from '../card/card';
import { useHistory } from 'react-router-dom';

const CardsList = ({ userId, cards, deleteCard }) => {
  const history = useHistory();
  const goToCardNew = () => {
    history.push({
      pathname: '/cards/new',
    });
  };

  return (
    <>
      <section className='mt-20'>
        <section className='space-x-6 md:space-x-8 px-8 py-10 flex flex-row items-center lg:px-32 2xl:px-44'>
          <div className='text-4xl md:text-5xl font-bold'>My Cards</div>
          <div
            className='space-x-2 flex items-center bg-[black] text-white py-2 px-6 rounded-full'
            onClick={goToCardNew}
          >
            <div>Add Card</div>
            <RiAddCircleFill />
          </div>
        </section>
        <div className='bg-white py-10 px-10 grid grid-cols-1 lg:px-32 lg:grid-cols-2 lg:gap-4 2xl:gap-6 2xl:grid-cols-3'>
          {Object.keys(cards).length > 0 ? (
            Object.keys(cards).map((key) => (
              <Card key={key} card={cards[key]} deleteCard={deleteCard} />
            ))
          ) : (
            <div className='flex justify-center items-center text-lg'>
              No cards
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CardsList;
