import React from 'react';

import BoxContainer from '../BoxContainer';
import Avatar from '../../Avatar';
import styles from './index.module.css';

const TicketOwner = ({ owner }) => {
  return (
    <BoxContainer title='Owner'>
      <div className={styles.container}>
        <Avatar size='medium' url={owner.avatar} />
        <div className={styles.info}>
          <p className={styles.name}>
            {`${owner.firstName} ${owner.lastName}`}
          </p>
          <p className={styles.specialities}>
            {
              owner.specialities.map((speciality) => `${speciality} `)
            }
          </p>
        </div>
      </div>
    </BoxContainer>
  );
};

export default TicketOwner;