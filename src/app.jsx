import { Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Cards from './components/cards/cards';
import Login from './components/login/login';
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
        <Route exact path='/cards'>
          <Cards authService={authService} cardRepository={cardRepository} />
        </Route>
        {/* <Route path='/maker'>
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          </Route> */}
      </Switch>
    </div>
  );
}

export default App;
