import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../card/card';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './cards.module.css';

const Cards = ({ authService, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [currentUserName, setCurrentUserName] = useState('');

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        if (cards) {
          Object.keys(cards).map((key) => console.log(cards[key]));
        }
        setUserId(user.uid);
        setCurrentUserName(user.auth.currentUser.displayName);
      } else {
        history.push('/');
      }
    });
  }, [authService, history]);

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.cards}>
      <Header onLogout={onLogout} currentUserName={currentUserName} />
      <div className={styles.title}>My Cards</div>
      <div className={styles.collection}>
        {cards &&
          Object.keys(cards).map((key) => (
            <Card key={key} card={cards[key]} deleteCard={deleteCard} />
          ))}
      </div>
      <Footer />
    </section>
  );
};

export default Cards;
