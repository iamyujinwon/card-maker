import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import Register from './components/register/register';
import RegisterSuccess from './components/register_success/registerSuccess';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
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
          <Route path='/maker'>
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
