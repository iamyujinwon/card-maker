import React from 'react';
import CardPreview from '../card_preview/cardPreview';

const TempPreview = ({ card, cardId, themeColor }) => (
  <section className='flex justify-center'>
    <ul>
      <CardPreview key={cardId} card={card} themeColor={themeColor} />
    </ul>
  </section>
);

export default TempPreview;
