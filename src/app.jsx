import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.modules.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login authService={authService} />
          </Route>
          <Route path='/maker'>
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
