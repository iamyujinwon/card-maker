import React from 'react';
import styles from './message.module.css';

const Message = ({ msg }) => {
  return <div className={styles.msg}>{msg}</div>;
};

export default Message;
