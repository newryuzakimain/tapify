import React from 'react';

import BoxContainer from '../BoxContainer';
import InfoLabel from '../InfoLabel';
import styles from './index.module.css';

const TicketAsset = ({ asset }) => {
  return (
    <BoxContainer title='Asset'>
      <InfoLabel
        label='Name'
        text={asset.name}
      />
      <InfoLabel
        label='GeoCode'
        text={asset.geoCode}
      />
      <InfoLabel label='Location'>
        <div className={styles.locationContainer}>
          <p className={styles.location}>
            {asset.kmFrom.toFixed(3)}
          </p>
          <p className={styles.location}>
            {asset.kmTo.toFixed(3)}
          </p>
        </div>
      </InfoLabel>
    </BoxContainer>
  );
};

export default TicketAsset;