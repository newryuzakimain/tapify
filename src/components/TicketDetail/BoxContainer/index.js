import React from 'react';

import styles from './index.module.css';

const BoxContainer = ({ title, children }) => {
  return (
    <main className={styles.root}>
      <div className={styles.header}>
        {title}
      </div>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  );
};

export default BoxContainer;