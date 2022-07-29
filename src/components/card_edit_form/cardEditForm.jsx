import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

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
  const onSubmit = () => {
    deleteCard(card);
  };
  return (
    <form className={styles.form}>
      <section className={styles.section}>
        <div className={styles.addMarginRight}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type='text'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type='text'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.addMarginRight}>
          <label className={styles.label}>Company</label>
          <input
            className={styles.input}
            type='text'
            name='company'
            value={company}
            onChange={onChange}
          />
        </div>
        <div className={styles.addMarginRight}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type='text'
            name='title'
            value={title}
            onChange={onChange}
          />
        </div>
        <div>
          <label className={styles.label}>Theme</label>
          <select
            className={styles.select}
            name='theme'
            value={theme}
            onChange={onChange}
          >
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
            className={styles.textarea}
            name='message'
            value={message}
            onChange={onChange}
          ></textarea>
        </div>
      </section>
      <div className={styles.buttons}>
        <ImageFileInput />
        <Button name='Delete' onClick={onSubmit} />
      </div>
    </form>
  );
};

export default CardEditForm;
