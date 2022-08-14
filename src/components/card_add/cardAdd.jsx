import React from 'react';
import CardAddForm from '../card_add_form/cardAddForm';
import styles from './cardAdd.module.css';

const CardAdd = ({ FileInput, addCard }) => {
  return (
    <>
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </>
  );
};

export default CardAdd;
