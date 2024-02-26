import React, { useContext } from 'react';
import styles from './Basket.module.css';
import Context from '../../store/context';

const Basket = () => {
  const context = useContext(Context);

  return (
    <div>
      <ul>
        {context.items.map((item, index) => (
          <li key={index}>
            <h1>{item.name}</h1>
            <img src={item.img} alt="" />
            <h2>{item.price}</h2>
          </li>
        ))}
      </ul>
      <h1>Total price: {context.totalPrice}</h1>
    </div>
  );
};

export default Basket;
