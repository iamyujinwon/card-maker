import React from 'react';
import { useParams } from 'react-router-dom';
import CardForm from '../card_form/cardForm';

const CardEdit = ({ FileInput, updateCard, cards }) => {
  const { cardId } = useParams();
  const title = 'Edit Card';

  return (
    <CardForm
      key={cardId}
      FileInput={FileInput}
      title={title}
      cards={cards}
      cardId={cardId}
      updateCard={updateCard}
    />
  );
};

export default CardEdit;
