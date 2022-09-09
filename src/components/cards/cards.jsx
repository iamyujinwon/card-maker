import React, { useEffect, useState, useCallback } from 'react';
import { Route, useHistory, Switch, useRouteMatch } from 'react-router-dom';
import CardsList from '../cards_list/cardsList';
import CardAdd from '../card_add/cardAdd';
import CardEdit from '../card_edit/cardEdit';
import Footer from '../footer/footer';
import Header from '../header/header';

const Cards = ({ FileInput, authService, cardRepository }) => {
  const { path } = useRouteMatch();
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
    <>
      <Header onLogout={onLogout} currentUserName={currentUserName} />
      <Switch>
        <Route exact path={`${path}`}>
          <CardsList userId={userId} cards={cards} deleteCard={deleteCard} />
        </Route>
        <Route path={`${path}/new`}>
          <CardAdd FileInput={FileInput} addCard={createOrUpdateCard} />
        </Route>
        <Route path={`${path}/:cardId`}>
          <CardEdit
            FileInput={FileInput}
            updateCard={createOrUpdateCard}
            deleteCard={deleteCard}
            cards={cards}
          />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default Cards;
