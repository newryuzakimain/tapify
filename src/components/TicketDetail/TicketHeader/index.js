import React from 'react';

import getDateByFormat from '../../../utils/getDateByFormat';
import styles from './index.module.css';

const TicketHeader = ({ ticket }) => {
  return (
    <main className={styles.root}>
      <p className={styles.label}>
        Ticket No.
        <span>
          {ticket.number}
        </span>
      </p>
      <p className={styles.label}>
        {`Last Updated ${getDateByFormat(ticket.lastUpdatedTime)}`}
      </p>
    </main>
  );
};

export default TicketHeader;