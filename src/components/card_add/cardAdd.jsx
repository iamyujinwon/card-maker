import React from 'react';
import CardForm from '../card_form/cardForm';

const CardAdd = ({ FileInput, updateCard }) => {
  const cardId = Date.now();
  const title = 'Create new card';

  return (
    <CardForm
      key={cardId}
      FileInput={FileInput}
      title={title}
      cards={''}
      cardId={cardId}
      updateCard={updateCard}
    />
  );
};

export default CardAdd;
