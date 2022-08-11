import React, { useState } from 'react';
import { useRef } from 'react';
import Button from '../button/button';
import CardAddForm from '../card_add_form/cardAddForm';
import CardEditForm from '../card_edit_form/cardEditForm';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './cardAdd.module.css';

const CardAdd = ({ FileInput, addCard }) => {
  return (
    <>
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </>
  );
};

export default CardAdd;
