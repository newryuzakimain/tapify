import React, { useState } from 'react';

import SearchTickets from './SearchTicket';
import FilteredTickets from './FilteredTickets';
import styles from './index.module.css';

const TicketList = ({ tickets, selectedTicket, onSelectTicket }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const displayedTickets = tickets.filter(ticket => ticket.asset.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={styles.container}>
      <SearchTickets 
        searchTerm={searchTerm} 
        onChangeSearchTerm={setSearchTerm} />
      <FilteredTickets 
        tickets={displayedTickets} 
        selectedTicket={selectedTicket}
        onSelectTicket={onSelectTicket} />
    </div>
  );
};

export default TicketList;