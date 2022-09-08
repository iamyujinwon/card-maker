import React from 'react';
import CardPreview from '../card_preview/cardPreview';

const Preview = ({ cards, cardId, themeColor }) => (
  <section className='flex justify-center'>
    <ul>
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
