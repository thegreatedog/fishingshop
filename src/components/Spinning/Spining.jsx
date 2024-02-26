import React from 'react';
import styles from '../Carp/Fishing.module.css';
import ItemsList from '../ItemsList/ItemsList';

const Spining = () => {
  return (
    <div className={styles.container}>
      <ItemsList itemType="spining" />
    </div>
  );
};

export default Spining;
