import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CardAddForm from '../card_add_form/cardAddForm';
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
      {/* {Object.keys(cards).map((key) => (
        <CardEditForm
          key={cardId}
          FileInput={FileInput}
          card={cards[cardId]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <Preview key={cardId} card={cards[cardId]} /> */}
    </>
  );
};

export default CardEdit;
