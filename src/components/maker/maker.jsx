import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.modules.css';

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <div onClick={onLogout}>log out</div>
    </section>
  );
};

export default Maker;
