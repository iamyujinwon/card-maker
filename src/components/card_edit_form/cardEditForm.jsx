import React from 'react';
import Button from '../button/button';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {};
  return (
    <form>
      <input type='text' name='name' value={name} />
      <input type='text' name='company' value={company} />
      <select name='theme' value={theme}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input type='text' name='title' value={title} />
      <input type='text' name='email' value={email} />
      <textarea name='message' value={message}></textarea>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
