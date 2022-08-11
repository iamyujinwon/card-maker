import React from 'react';
import { useParams } from 'react-router-dom';
import CardEditForm from '../card_edit_form/cardEditForm';
import Preview from '../preview/preview';
import styles from './cardEdit.module.css';

const CardEdit = ({ FileInput, updateCard, deleteCard, cards }) => {
  const { cardId } = useParams();

  return (
    <>
      {Object.keys(cards).map(
        (key) =>
          key === cardId && (
            <CardEditForm
              key={cardId}
              FileInput={FileInput}
              card={cards[cardId]}
              updateCard={updateCard}
              deleteCard={deleteCard}
            />
          )
      )}
      <Preview key={cardId} cards={cards} cardId={cardId} />
    </>
  );
};

export default CardEdit;
