import React from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

const Avatar = ({ url, size = 'small', className }) => {
  return (
    <img
      src={url}
      alt='avatar'
      className={clsx(styles.root, className, { [styles.small]: size === 'small' })}
    />
  );
};

export default Avatar;