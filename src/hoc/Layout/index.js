
import React from 'react';

import Header from '../../containers/Header';
import styles from './index.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
