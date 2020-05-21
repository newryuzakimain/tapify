import React from 'react';

import BoxContainer from '../BoxContainer';
import InfoLabel from '../InfoLabel';
import getDateByFormat from '../../../utils/getDateByFormat';
import TicketStatus from '../../TicketStatus';

const TicketInfo = ({ ticket }) => {
  return (
    <BoxContainer title='Details'>
      <InfoLabel
        label='Reported'
        text={getDateByFormat(ticket.reportedTime)}
      />
      <InfoLabel label='Status'>
        <TicketStatus value={ticket.status} />
      </InfoLabel>
      <InfoLabel
        label='Description'
        text={ticket.description}
      />
    </BoxContainer>
  );
};

export default TicketInfo;