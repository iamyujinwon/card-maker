import React, { memo } from 'react';
import styles from './card.module.css';
import character from '../images/default_logo.png';
import { BsTrash, BsPencilFill, BsDownload } from 'react-icons/bs';

import { MdDelete, MdEdit, MdDownload } from 'react-icons/md';

const DEFAULT_IMAGE = character;

const Card = memo(({ card, deleteCard }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  const onDelete = () => {
    deleteCard(card);
  };

  return (
    <li className={`${styles.card} ${addTheme(theme)}`}>
      <section className={styles.icons}>
        <div className={styles.trash} onClick={onDelete}>
          <MdDelete />
        </div>
        <div className={styles.pencil}>
          <MdEdit />
        </div>
        <div className={styles.download}>
          <MdDownload />
        </div>
      </section>
      <img className={styles.avatar} src={url} alt='profile' />
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

export default Card;
