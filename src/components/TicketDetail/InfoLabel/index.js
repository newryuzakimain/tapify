import React from 'react';

import styles from './index.module.css';

const InfoLabel = ({ label, text, children }) => {
  return (
    <main className={styles.root}>
      <p className={styles.label}>
        {label}
      </p>
      <p className={styles.info}>
        {text}
      </p>
      <div className={styles.info}>
        {children}
      </div>
    </main>
  );
};

export default InfoLabel;