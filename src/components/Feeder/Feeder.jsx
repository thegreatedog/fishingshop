import React from 'react';
import styles from '../Carp/Fishing.module.css';
import ItemsList from '../ItemsList/ItemsList';

const Feeder = () => {
  return (
    <div className={styles.container}>
      <ItemsList itemType="feeder" />
    </div>
  );
};

export default Feeder;
