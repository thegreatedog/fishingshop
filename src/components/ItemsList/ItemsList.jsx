import React, { useState, useEffect, useContext } from 'react';
import styles from './ItemsList.module.css';
import { FaCartPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ROUTES from '../Layonts/ROUTES';
import DUMMY_ITEMS from '../DUMMY_ITEMS';
import Context from '../../store/context';

const ItemsList = ({ itemType }) => {
  const [items, setItems] = useState(DUMMY_ITEMS);
  const context = useContext(Context);

  useEffect(() => {
    if (itemType) {
      const items = DUMMY_ITEMS.filter((item) => item.type === itemType);
      setItems(items);
    }
  }, [itemType]);

  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index}>
          <div>
            <NavLink to={ROUTES.item(`/${item.type}`, item.id)}>
              <img src={item.img} alt="" />
            </NavLink>
            <NavLink to={ROUTES.item(`/${item.type}`, item.id)}>
              <span>{item.name}</span>
            </NavLink>
            <span style={{ fontSize: '25px' }}> Price : {item.price} $ </span>
            <FaCartPlus onClick={() => context.updateItems(item)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
