import React from 'react';
import styles from './preview.module.css';
import CardPreview from '../card_preview/cardPreview';

const Preview = ({ card }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      <CardPreview card={card} />
    </ul>
  </section>
);

export default Preview;
