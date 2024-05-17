import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css'; 

function Header() {
  return (
    <header className={styles.headerContainer}> 
      <nav>
        <div>
          <h1>LOGO</h1>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
