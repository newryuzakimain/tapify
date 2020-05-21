import React from 'react';

import TicketHeader from './TicketHeader';
import TicketOwner from './TicketOwner';
import TicketInfo from './TicketInfo';
import TicketAsset from './TicketAsset';
import EmptyPlaceholder from '../EmptyPlaceholder';
import styles from './index.module.css';

const TicketDetail = ({ ticket }) => {
  return (
    <div className={styles.root}>
      {ticket ?
        <>
          <TicketHeader ticket={ticket} />
          <TicketOwner owner={ticket.owner} />
          <TicketInfo ticket={ticket} />
          <TicketAsset asset={ticket.asset} />
        </>
        : <EmptyPlaceholder text='No ticket selected' />
      }
    </div>
  );
};

export default TicketDetail;