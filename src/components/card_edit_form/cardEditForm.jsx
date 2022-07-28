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
        <div>
          <label className={styles.label} for='name'>
            Name
          </label>
          <input
            className={styles.input}
            type='text'
            name='name'
            value={name}
          />
        </div>
        <div>
          <label className={styles.label} for='email'>
            Email
          </label>
          <input
            className={styles.input}
            type='text'
            name='email'
            value={email}
          />
        </div>
      </section>
      <section className={styles.section}>
        <div>
          <label className={styles.label} for='company'>
            Company
          </label>
          <input
            className={styles.input}
            type='text'
            name='company'
            value={company}
          />
        </div>
        <div>
          <label className={styles.label} for='title'>
            Title
          </label>
          <input
            className={styles.input}
            type='text'
            name='title'
            value={title}
          />
        </div>
        <div>
          <label className={styles.label} for='theme'>
            Theme
          </label>
          <select className={styles.select} name='theme' value={theme}>
            <option value='dark'>Dark</option>
            <option value='light'>Light</option>
            <option value='colorful'>Colorful</option>
          </select>
        </div>
      </section>
      <section className={styles.section}>
        <div>
          <label className={styles.label} for='message'>
            Message
          </label>
          <textarea
            className={styles.textarea}
            name='message'
            value={message}
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
