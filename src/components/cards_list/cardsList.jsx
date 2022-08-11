import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './cardsList.module.css';
import { RiAddCircleFill } from 'react-icons/ri';
import Card from '../card/card';
import { useHistory } from 'react-router-dom';

const CardsList = ({ cards, deleteCard }) => {
  const history = useHistory();
  const goToCardNew = () => {
    history.push({
      pathname: '/cards/new',
    });
  };

  return (
    <>
      <section className={styles.cards}>
        <section className={styles.section}>
          <div className={styles.title}>My Cards</div>
          <div className={styles.addBtn} onClick={goToCardNew}>
            <div className={styles.addMsg}>Add Card</div>
            <RiAddCircleFill />
          </div>
        </section>
        <div className={styles.collection}>
          {Object.keys(cards).length > 0 ? (
            Object.keys(cards).map((key) => (
              <Card key={key} card={cards[key]} deleteCard={deleteCard} />
            ))
          ) : (
            <div className={styles.noCard}>No cards</div>
          )}
        </div>
      </section>
    </>
  );
};

export default CardsList;
