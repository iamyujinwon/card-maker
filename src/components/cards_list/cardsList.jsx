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
      <section className=''>
        <section className=''>
          <div className=''>My Cards</div>
          <div className='' onClick={goToCardNew}>
            <div className=''>Add Card</div>
            <RiAddCircleFill />
          </div>
        </section>
        <div className=''>
          {Object.keys(cards).length > 0 ? (
            Object.keys(cards).map((key) => (
              <Card key={key} card={cards[key]} deleteCard={deleteCard} />
            ))
          ) : (
            <div className=''>No cards</div>
          )}
        </div>
      </section>
    </>
  );
};

export default CardsList;
