import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../button/button';
import { CirclePicker } from 'react-color';

const CardEditForm = ({
  FileInput,
  card,
  updateCard,
  themeColor,
  showColorPalette,
  handleChange,
}) => {
  const history = useHistory();
  const { name, company, title, email, message, theme, fileName } = card;

  const goToCards = () => {
    history.push({
      pathname: '/cards',
    });
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const changeThemeColor = () => {
    if (themeColor !== undefined) {
      updateCard({
        ...card,
        ['theme']: themeColor,
      });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    changeThemeColor();
    goToCards();
  };

  return (
    <form className='mb-12 flex flex-col space-y-5'>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Name</label>
        <input
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          type='text'
          name='name'
          value={name}
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Email</label>
        <input
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          type='text'
          name='email'
          value={email}
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Company</label>
        <input
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          type='text'
          name='company'
          value={company}
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Title</label>
        <input
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          type='text'
          name='title'
          value={title}
          onChange={onChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Theme</label>
        <div
          className='flex justify-between items-center mx-10 px-5 py-3 rounded-lg border border-gray-300 bg-white'
          name='theme'
          onClick={showColorPalette}
        >
          {themeColor == undefined ? theme : themeColor}
          <span
            className='w-7 h-7 rounded-full'
            style={{
              backgroundColor:
                theme === themeColor
                  ? theme
                  : themeColor || (themeColor === undefined && theme),
            }}
          />
        </div>
        <div className='flex justify-center pt-3'>
          <CirclePicker
            color={themeColor}
            onChange={handleChange}
            input={themeColor}
          />
        </div>
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Message</label>
        <textarea
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          name='message'
          value={message}
          onChange={onChange}
        ></textarea>
      </div>
      <div className='flex flex-col mx-10 space-y-8'>
        <FileInput name={fileName} onFileChange={onFileChange} />
        <Button name='Done' onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
