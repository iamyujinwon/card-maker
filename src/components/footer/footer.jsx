import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  return (
    <section className={styles.footer}>
      <span>© Card Monster | Yujin Won | 2022</span>
    </section>
  );
});

export default Footer;
