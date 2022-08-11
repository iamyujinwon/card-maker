import React from 'react';
import { memo } from 'react';
import styles from './cardPreview.module.css';
import character from '../images/default_logo.png';

const DEFAULT_IMAGE = character;

const CardPreview = memo(({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const fileUrl = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${addTheme(theme)}`}>
      <img className={styles.avatar} src={fileUrl} alt='profile' />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
});

function addTheme(theme) {
  switch (theme) {
    case 'Dark':
      return styles.dark;
    case 'Light':
      return styles.light;
    case 'Colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default CardPreview;
