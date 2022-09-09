import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import CardEditForm from '../card_edit_form/cardEditForm';
import Preview from '../preview/preview';

const CardEdit = ({ FileInput, updateCard, cards }) => {
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
    <div className='mt-20 xl:flex'>
      <div className='p-5 border-b sm:py-5 sm:px-10 bg-white flex flex-col space-y-8 xl:space-y-0 xl:w-1/2 xl:h-full xl:fixed xl:flex-row xl:border-b-none xl:border-r'>
        <section className='flex flex-col space-y-8'>
          <Link to='/cards' className='flex items-center space-x-1'>
            <IoIosArrowBack />
            <span className='font-bold'>My Cards</span>
          </Link>
          <span className='text-4xl font-bold'>Edit Card</span>
        </section>
        <div className='mb-5 xl:mb-0 xl:px-3 xl:flex xl:justify-center xl:items-center '>
          <Preview
            key={cardId}
            cards={cards}
            cardId={cardId}
            themeColor={themeColor}
          />
        </div>
      </div>
      <section className='py-10 xl:w-1/2 xl:absolute xl:top-20 xl:left-1/2 xl:bg-[#F2F0E8] xl:px-40 xl:py-20'>
        <div className=''>
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
      </section>
    </div>
  );
};

export default CardEdit;
