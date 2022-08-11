import { Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Cards from './components/cards/cards';
import CardAdd from './components/card_add/cardAdd';
import Login from './components/login/login';
import NotFound from './components/not_found/notFound';
import Register from './components/register/register';
import RegisterSuccess from './components/register_success/registerSuccess';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path='/'>
          <Login authService={authService} />
        </Route>
        <Route path='/register'>
          <Register authService={authService} />
        </Route>
        <Route path='/register_success'>
          <RegisterSuccess />
        </Route>
        <Route path='/cards'>
          <Cards
            FileInput={FileInput}
            authService={authService}
            cardRepository={cardRepository}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
