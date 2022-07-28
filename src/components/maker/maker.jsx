import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Yujin',
      company: 'Card Maker',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'iamyujinwon@gmail.com',
      message: 'hello',
      fileName: 'yujin',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Sangwoo',
      company: 'Shopify',
      theme: 'light',
      title: 'Software Engineer',
      email: 'slucakskim@gmail.com',
      message: 'hello',
      fileName: 'sw',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Amy',
      company: 'Card Maker',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'amy@gmail.com',
      message: 'hello',
      fileName: 'amy',
      fileURL: null,
    },
  ]);
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
