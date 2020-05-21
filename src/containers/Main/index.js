import React, { useEffect, useState } from 'react';

import TicketList from '../../components/TicketList';
import TicketDetail from '../../components/TicketDetail';
import { API_URL } from '../../config';
import styles from './index.module.css';

const Main = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState();

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setTickets(data)
      });
  }, []);

  const selectTicketHandler = ticket => () => {
    setSelectedTicket(ticket);
  };

  return (
    <div className={styles.container}>
      <div className={styles.ticketList}>
        <TicketList 
          tickets={tickets} 
          selectedTicket={selectedTicket}
          onSelectTicket={selectTicketHandler} />
      </div>
      <div className={styles.ticketDetail}>
        <TicketDetail ticket={selectedTicket} />
      </div>
    </div>
  );
};

export default Main;