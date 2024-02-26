import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPriceHandler = items.reduce(
      (accumalator, totalPrice) => accumalator + totalPrice.price,
      0
    );
    setTotalPrice(totalPriceHandler);
  }, [items]);

  const updateItems = (item) => {
    setItems((prevState) => [...prevState, item]);
  };
  const contextValue = {
    items,
    updateItems,
    totalPrice,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
