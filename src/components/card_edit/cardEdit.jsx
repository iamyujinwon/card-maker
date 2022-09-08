import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardEditForm from '../card_edit_form/cardEditForm';
import Preview from '../preview/preview';
import styles from './cardEdit.module.css';

const CardEdit = ({ FileInput, updateCard, deleteCard, cards }) => {
  const { cardId } = useParams();
  const [themeColor, setThemeColor] = useState();
  const [showPalette, setShowPalette] = useState(false);

  const showColorPalette = () => {
    setShowPalette(!showPalette);
  };

  const handleChange = (color) => {
    setThemeColor(color.hex);
  };

  return (
    <section className='mt-20 py-10 flex flex-col-reverse lg:flex-row'>
      <div>
        {Object.keys(cards).map(
          (key) =>
            key === cardId && (
              <CardEditForm
                key={cardId}
                FileInput={FileInput}
                card={cards[cardId]}
                updateCard={updateCard}
                themeColor={themeColor}
                showColorPalette={showColorPalette}
                handleChange={handleChange}
              />
            )
        )}
      </div>
      <div>
        <Preview
          key={cardId}
          cards={cards}
          cardId={cardId}
          themeColor={themeColor}
        />
      </div>
    </section>
  );
};

export default CardEdit;
