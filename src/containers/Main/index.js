import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TicketList from '../../components/TicketList';
import TicketDetail from '../../components/TicketDetail';
import { API_URL } from '../../config';
import { setTickets } from '../../actions/tickets';
import styles from './index.module.css';

const Main = () => {
  const [selectedTicket, setSelectedTicket] = useState();
  const { tickets } = useSelector(state =>  state.tickets, []);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch(setTickets(data));
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [dispatch]);

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