import React, { memo } from 'react';
import styles from './card.module.css';
import character from '../images/default_logo.png';
import { MdDelete, MdEdit, MdDownload } from 'react-icons/md';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

const DEFAULT_IMAGE = character;

const Card = memo(({ card, deleteCard }) => {
  const { path, url } = useRouteMatch();
  const { name, company, title, email, message, theme, fileURL } = card;
  const fileUrl = fileURL || DEFAULT_IMAGE;

  const onDelete = () => {
    deleteCard(card);
  };

  console.log(theme);

  return (
    <li className={styles.card} style={{ backgroundColor: theme }}>
      <section className={styles.icons}>
        <div className={styles.trash} onClick={onDelete}>
          <MdDelete />
        </div>
        <Link to={`${url}/${card.id}`} className={styles.pencil}>
          <MdEdit />
        </Link>
        <div className={styles.download}>
          <MdDownload />
        </div>
      </section>
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

export default Card;
