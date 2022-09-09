import React, { memo, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CirclePicker } from 'react-color';
import Button from '../button/button';

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const [themeColor, setThemeColor] = useState('#cddc39');
  const [showPalette, setShowPalette] = useState(false);

  const history = useHistory();
  const goToCards = () => {
    history.push({
      pathname: '/cards',
    });
  };

  const showColorPalette = () => {
    setShowPalette(!showPalette);
  };

  const handleChange = (color) => {
    setThemeColor(color.hex);
  };

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      email: emailRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      theme: themeColor || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };

    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    card.name !== '' && onAdd(card);
    goToCards();
  };

  return (
    <form ref={formRef} className='mb-12 flex flex-col space-y-5'>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Name</label>
        <input
          ref={nameRef}
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          type='text'
          name='name'
          placeholder='Name'
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Email</label>
        <input
          ref={emailRef}
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          type='text'
          name='email'
          placeholder='Email'
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Company</label>
        <input
          ref={companyRef}
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          type='text'
          name='company'
          placeholder='Company'
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Title</label>
        <input
          ref={titleRef}
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          type='text'
          name='title'
          placeholder='Title'
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label className='px-10 text-lg font-bold'>Theme</label>
        <div
          className='flex justify-between items-center mx-10 px-5 py-3 rounded-lg border border-gray-300 bg-white'
          onClick={showColorPalette}
        >
          {themeColor ? themeColor : 'Click to pick theme color'}
          <span
            className='w-7 h-7 rounded-full'
            style={{ backgroundColor: themeColor }}
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
          ref={messageRef}
          className='mx-10 px-5 py-3 rounded-lg border border-gray-300'
          name='message'
          placeholder='Message'
        ></textarea>
      </div>
      <div className='flex flex-col mx-10 space-y-8'>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
        <Button name='Add' onClick={onSubmit} />
      </div>
    </form>
  );
});

export default CardAddForm;
