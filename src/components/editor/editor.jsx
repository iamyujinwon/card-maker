import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/cardEditForm';

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
    </section>
  );
};

export default Editor;
