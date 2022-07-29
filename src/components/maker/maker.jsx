import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Yujin',
      company: 'Card Maker',
      theme: 'Dark',
      title: 'Software Engineer',
      email: 'iamyujinwon@gmail.com',
      message: 'hello',
      fileName: 'yujin',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Sangwoo',
      company: 'Shopify',
      theme: 'Light',
      title: 'Software Engineer',
      email: 'slucakskim@gmail.com',
      message: 'hello',
      fileName: 'sw',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'Amy',
      company: 'Card Maker',
      theme: 'Colorful',
      title: 'Software Engineer',
      email: 'amy@gmail.com',
      message: 'hello',
      fileName: 'amy',
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
