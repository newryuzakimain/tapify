import React from 'react';

import TicketList from '../../components/TicketList';
import TicketDetail from '../../components/TicketDetail';
import styles from './index.module.css';

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ticketList}>
        <TicketList />
      </div>
      <div className={styles.ticketDetail}>
        <TicketDetail />
      </div>
    </div>
  );
};

export default Main;