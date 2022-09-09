import React from 'react';
import { useParams } from 'react-router-dom';
import CardForm from '../card_form/cardForm';

const CardEdit = ({ FileInput, updateCard, cards }) => {
  const { cardId } = useParams();
  const editMode = true;

  return (
    <CardForm
      key={cardId}
      FileInput={FileInput}
      cards={editMode ? cards : ''}
      cardId={cardId}
      updateCard={updateCard}
    />
  );
};

export default CardEdit;
