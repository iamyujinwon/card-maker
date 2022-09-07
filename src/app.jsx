import { Switch, Route } from 'react-router-dom';
import Cards from './components/cards/cards';
import Login from './components/login/login';
import NotFound from './components/not_found/notFound';
import Register from './components/register/register';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className='font-poppins'>
      <Switch>
        <Route exact path='/'>
          <Login authService={authService} />
        </Route>
        <Route path='/register'>
          <Register authService={authService} />
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
