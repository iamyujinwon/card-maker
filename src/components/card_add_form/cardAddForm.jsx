import React, { memo, useRef, useState } from 'react';
import Button from '../button/button';
import styles from './cardAddForm.module.css';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const history = useHistory();
  const goToCards = () => {
    history.push({
      pathname: '/cards',
    });
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
      theme: themeRef.current.value || '',
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
    <form ref={formRef} className={styles.form}>
      <button className={styles.backBtn} onClick={goToCards}>
        <IoIosArrowBack />
      </button>
      <div className={styles.title}>New Card</div>
      <section className={styles.section}>
        <div className={styles.addMarginRight}>
          <label className={styles.label}>Name</label>
          <input
            ref={nameRef}
            className={styles.input}
            type='text'
            name='name'
            placeholder='Name'
          />
        </div>
        <div>
          <label className={styles.label}>Email</label>
          <input
            ref={emailRef}
            className={styles.input}
            type='text'
            name='email'
            placeholder='Email'
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.addMarginRight}>
          <label className={styles.label}>Company</label>
          <input
            ref={companyRef}
            className={styles.input}
            type='text'
            name='company'
            placeholder='Company'
          />
        </div>
        <div className={styles.addMarginRight}>
          <label className={styles.label}>Title</label>
          <input
            ref={titleRef}
            className={styles.input}
            type='text'
            name='title'
            placeholder='Title'
          />
        </div>
        <div>
          <label className={styles.label}>Theme</label>
          <select ref={themeRef} className={styles.select} name='theme'>
            <option placeholder='Dark'>Dark</option>
            <option placeholder='Light'>Light</option>
            <option placeholder='Colorful'>Colorful</option>
          </select>
        </div>
      </section>
      <section className={styles.section}>
        <div>
          <label className={styles.label}>Message</label>
          <textarea
            ref={messageRef}
            className={styles.textarea}
            name='message'
            placeholder='Message'
          ></textarea>
        </div>
      </section>
      <div className={styles.buttons}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
        <Button name='Add' onClick={onSubmit} />
      </div>
    </form>
  );
});

export default CardAddForm;
