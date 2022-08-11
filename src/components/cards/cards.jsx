import React, { useEffect, useState, useCallback } from 'react';
import {
  Route,
  useHistory,
  Switch,
  BrowserRouter,
  useRouteMatch,
} from 'react-router-dom';

import CardsList from '../cards_list/cardsList';
import CardAdd from '../card_add/cardAdd';
import Maker from '../maker/maker';

const Cards = ({ FileInput, authService, cardRepository }) => {
  const { path, url } = useRouteMatch();
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
    <Switch>
      <Route exact path={`${path}`}>
        <CardsList
          onLogout={onLogout}
          currentUserName={currentUserName}
          cards={cards}
          deleteCard={deleteCard}
        />
      </Route>
      <Route path={`${path}/new`}>
        <CardAdd
          onLogout={onLogout}
          currentUserName={currentUserName}
          FileInput={FileInput}
          addCard={createOrUpdateCard}
          cards={cards}
        />
      </Route>
      <Route path={`${path}/:id`}>
        <Maker />
      </Route>
    </Switch>
  );
};

export default Cards;
