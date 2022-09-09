import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CirclePicker } from 'react-color';
import { IoIosArrowBack } from 'react-icons/io';
import Button from '../button/button';
import Preview from '../preview/preview';

const CardForm = ({ FileInput, title, cards, cardId, updateCard }) => {
  const history = useHistory();
  const [tempCard, setTempCard] = useState('');

  useEffect(() => {
    if (cards !== '') {
      setTempCard({
        ...cards[cardId],
      });
    } else {
      setTempCard({ id: cardId, theme: '#cddc39' });
    }
  }, [cards, cardId]);

  const goToCards = () => {
    history.push({
      pathname: '/cards',
    });
  };

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    setTempCard({
      ...tempCard,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    setTempCard({
      ...tempCard,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const handleColorChange = (color) => {
    setTempCard({
      ...tempCard,
      theme: color.hex,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    updateCard({ ...tempCard });
    goToCards();
  };

  return (
    <div className='mt-20 xl:flex'>
      <div className='p-5 border-b sm:py-5 sm:px-10 bg-white flex flex-col space-y-8 xl:space-y-0 xl:w-1/2 xl:h-full xl:fixed xl:border-b-none xl:border-r'>
        <section className='flex flex-col space-y-8 xl:basis-1/3'>
          <Link to='/cards' className='flex items-center space-x-1 w-[7rem]'>
            <IoIosArrowBack />
            <span className='font-bold'>My Cards</span>
          </Link>
          <span className='text-4xl font-bold'>{title}</span>
        </section>
        <div className='mb-5 xl:mb-0 xl:px-3 xl:flex xl:justify-center xl:items-center'>
          <Preview card={tempCard} />
        </div>
      </div>
      <section className='py-10 xl:w-1/2 xl:absolute xl:top-20 xl:left-1/2 xl:bg-[#F2F0E8] xl:px-40 xl:py-20'>
        <div>
          <form className='mb-12 flex flex-col space-y-5'>
            <div className='flex flex-col space-y-2'>
              <label className='px-10 text-lg font-bold'>Name</label>
              <input
                className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
                type='text'
                name='name'
                placeholder='Name'
                value={tempCard.name}
                onChange={onChange}
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='px-10 text-lg font-bold'>Email</label>
              <input
                className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
                type='text'
                name='email'
                placeholder='Email'
                value={tempCard.email}
                onChange={onChange}
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='px-10 text-lg font-bold'>Company</label>
              <input
                className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
                type='text'
                name='company'
                placeholder='Company'
                value={tempCard.company}
                onChange={onChange}
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='px-10 text-lg font-bold'>Title</label>
              <input
                className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
                type='text'
                name='title'
                placeholder='Title'
                value={tempCard.title}
                onChange={onChange}
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='px-10 text-lg font-bold'>Theme</label>
              <div
                className='flex justify-between items-center mx-10 px-5 py-3 rounded-lg border border-gray-300 bg-white'
                name='theme'
              >
                {tempCard.theme}
                <span
                  className='w-7 h-7 rounded-full'
                  style={{ backgroundColor: tempCard.theme }}
                />
              </div>
              <div className='flex justify-center pt-3'>
                <CirclePicker
                  color={tempCard.theme}
                  onChange={handleColorChange}
                />
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='px-10 text-lg font-bold'>Message</label>
              <textarea
                className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
                name='message'
                placeholder='Message'
                value={tempCard.message}
                onChange={onChange}
              ></textarea>
            </div>
            <div className='flex flex-col mx-10 space-y-8'>
              <FileInput name={tempCard.fileName} onFileChange={onFileChange} />
              <Button name='Done' onClick={onSubmit} />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CardForm;
