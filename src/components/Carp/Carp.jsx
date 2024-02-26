import React from 'react';
import styles from './Fishing.module.css';

import ItemsList from '../ItemsList/ItemsList';

const Carp = () => {
  return (
    <div className={styles.container}>
      <ItemsList itemType="carp" />
    </div>
  );
};

export default Carp;
