import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contacts}>
        <h1>Contacts:</h1>
        <p>Email:blablabla@gmail.com</p>
        <p>Phone:+321912355</p>
        <p>Country:Ukraine</p>
      </section>
      <section className={styles.rights}>
        <p>{props.children}</p>
      </section>
    </footer>
  );
};

export default Footer;
