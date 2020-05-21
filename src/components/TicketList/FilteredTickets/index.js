import React from 'react';

import getDateByFormat from '../../../utils/getDateByFormat';
import styles from './index.module.css';
import Avatar from '../../Avatar';
import TicketStatus from '../../TicketStatus';
import EmptyPlaceholder from '../../EmptyPlaceholder';

const FilteredTickets = ({ tickets, selectedTicket, onSelectTicket }) => {
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerPanel}>
          <div className={styles.left}>
            <div className={styles.owner}>owner</div>
            <div className={styles.reported}>Reported</div>
            <div>Asset</div>
          </div>
          <div>Status</div>
        </div>
      </div>
      {tickets.length > 0 ? 
        <>
          {tickets.map(ticket => {
            const containerClassName = (selectedTicket && ticket.ticketId === selectedTicket.ticketId) ? styles.selected : styles.itemContainer;
            return (
              <div className={containerClassName} key={ticket.ticketId} onClick={onSelectTicket(ticket)}>
                <div className={styles.panel}>
                  <div className={styles.left}>
                    <div className={styles.owner}>
                      <Avatar url={ticket.owner.avatar} />
                    </div>
                    <div className={styles.reported}>
                      {getDateByFormat(ticket.reportedTime)}
                    </div>
                    <div className={styles.asset}>{ticket.asset.name}</div>
                  </div>
                  <div>
                    <TicketStatus value={ticket.status} />
                  </div>
                </div>
              </div>
            )
          })}
        </>
        : <EmptyPlaceholder text='No ticket' />
      }
    </div>
  );
};

export default FilteredTickets;