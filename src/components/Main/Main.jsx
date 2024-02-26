import React from 'react';
import styles from '../Carp/Fishing.module.css';

import ItemsList from '../ItemsList/ItemsList';

const Main = () => {
  return (
    <div className={styles.container}>
      <ItemsList />
    </div>
  );
};

export default Main;
