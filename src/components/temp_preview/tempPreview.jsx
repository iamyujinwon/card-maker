import React from 'react';
import CardPreview from '../card_preview/cardPreview';

const TempPreview = ({ card, cardId }) => (
  <section className='flex justify-center'>
    <ul>
      <CardPreview key={cardId} card={card} />
    </ul>
  </section>
);

export default TempPreview;
