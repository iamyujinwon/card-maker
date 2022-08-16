import React from 'react';
import styles from './preview.module.css';
import CardPreview from '../card_preview/cardPreview';

const Preview = ({ cards, cardId, themeColor }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map(
        (key) =>
          key === cardId && (
            <CardPreview key={key} card={cards[key]} themeColor={themeColor} />
          )
      )}
    </ul>
  </section>
);

export default Preview;
