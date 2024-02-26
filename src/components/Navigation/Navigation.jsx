import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import ROUTES from '../Layonts/ROUTES';

const Navigation = () => {
  return (
    <div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink
              to={ROUTES.main}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.spining}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Spining
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.carp}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Carp
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.feeder}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Feeder
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
