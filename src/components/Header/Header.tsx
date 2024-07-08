import React from "react";
import "./Header.scss";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <ul className="header__list">
        <Link className="header__link" to="/">
          Home
        </Link>
        <Link className="header__link" to="/about">
          About
        </Link>
      </ul>

      <Link className="header__button" to="/sign-in">
        Sign in
      </Link>
    </header>
  );
};

export default Header;
