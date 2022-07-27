import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.modules.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login authService={authService} />} />
          <Route path='/maker' element={<Maker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
