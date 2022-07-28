import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <section className={styles.section}>
        <div className={styles.addMarginRight}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type='text'
            name='name'
            placeholder={name}
          />
        </div>
        <div>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type='text'
            name='email'
            placeholder={email}
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
            placeholder={company}
          />
        </div>
        <div className={styles.addMarginRight}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type='text'
            name='title'
            placeholder={title}
          />
        </div>
        <div>
          <label className={styles.label}>Theme</label>
          <select className={styles.select} name='theme' placeholder={theme}>
            <option placeholder='dark'>Dark</option>
            <option placeholder='light'>Light</option>
            <option placeholder='colorful'>Colorful</option>
          </select>
        </div>
      </section>
      <section className={styles.section}>
        <div>
          <label className={styles.label}>Message</label>
          <textarea
            className={styles.textarea}
            name='message'
            placeholder={message}
          ></textarea>
        </div>
      </section>
      <div className={styles.buttons}>
        <Button name='Delete' onClick={onSubmit} />
        <ImageFileInput />
      </div>
    </form>
  );
};

export default CardEditForm;
