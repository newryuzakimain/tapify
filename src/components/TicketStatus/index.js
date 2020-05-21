import React from 'react';
import clsx from 'clsx';

import getStatusName from '../../utils/getStatusName';
import styles from './index.module.css';

const TicketStatus = ({ value }) => {
  const status = getStatusName(value);

  const labelClassName = styles[value];
  return (
    <div className={clsx(styles.container, labelClassName)}>
      {status}
    </div>
  );
};

export default TicketStatus;