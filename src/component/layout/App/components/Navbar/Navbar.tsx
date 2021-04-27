import React from 'react';
import style from './Navbar.module.scss';

const Navbar = () => (
  <nav className={style.wrapper}>
    <img
      className={style.logo}
      src="/images/kiasili.svg"
      alt="kiasili-logo"
    />
  </nav>
);

export default Navbar;
