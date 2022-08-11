import React from 'react';
import { useParams } from 'react-router-dom';
import CardEditForm from '../card_edit_form/cardEditForm';
import Preview from '../preview/preview';
import styles from './cardEdit.module.css';

const CardEdit = ({ FileInput, updateCard, deleteCard, cards }) => {
  const { cardId } = useParams();

  return (
    <section className={styles.section}>
      <div className={styles.editForm}>
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
      </div>
      <div className={styles.preview}>
        <Preview key={cardId} cards={cards} cardId={cardId} />
      </div>
    </section>
  );
};

export default CardEdit;
