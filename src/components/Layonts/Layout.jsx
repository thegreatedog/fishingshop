import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsBasketFill } from 'react-icons/bs';
import styles from './Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import Context from '../../store/context';

const Layout = () => {
  const context = useContext(Context);
  return (
    <div>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <NavLink to="/basket">
            <div className={styles['basket-container']}>
              <h3>{context.items.length}</h3>
              <BsBasketFill className={styles.basket} />
            </div>
          </NavLink>
          <Outlet />
        </main>
        <Footer>all rights reserved</Footer>
      </div>
    </div>
  );
};

export default Layout;
