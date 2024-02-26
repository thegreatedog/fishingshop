import React, { useEffect, useState, useContext } from 'react';
import styles from './Rod.module.css';
import { useParams } from 'react-router-dom';
import DUMMY_ITEMS from '../DUMMY_ITEMS';
import Context from '../../store/context';

const Rod = () => {
  const params = useParams();
  const [rod, setRod] = useState('');
  const context = useContext(Context);

  useEffect(() => {
    const foundRod = DUMMY_ITEMS.find(
      (rod) => rod.id === Number(params.itemId)
    );

    setRod(foundRod);
  }, []);

  if (!rod) {
    return <h1 className={styles.loading}>Loading...</h1>;
  }

  return (
    <>
      <h1 className={styles.name}>{rod.name}</h1>
      <div className={styles['rod-container']}>
        <img src={rod.img} alt="" />
        <div className={styles.description}>
          <h4>
            <span>Description: </span>
            {rod.description}
          </h4>
          <h2>Price : {rod.price}$</h2>
          <button onClick={() => context.updateItems(rod)}>
            Add to basket
          </button>
        </div>
      </div>
    </>
  );
};

export default Rod;
