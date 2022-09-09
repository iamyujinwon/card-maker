import React from 'react';
import CardPreview from '../card_preview/cardPreview';

const TempPreview = ({ card, cardId }) => (
  <section className='flex justify-center'>
    <CardPreview key={cardId} card={card} />
  </section>
);

export default TempPreview;
