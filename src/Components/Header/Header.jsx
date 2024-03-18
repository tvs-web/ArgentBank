import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
export default function Header(props) {
  const { pathname } = useLocation();
  console.log(pathname);
  const {
    headerLogo,
    headerAlt,
    headerNav1,
    headerNav2,
    headerIconNav1,
    headerIconNav2,
  } = props;

  return (
    <nav>
      <header className="header">
        <Link to="/">
          <img className="logo" src={headerLogo} alt={headerAlt} />
        </Link>
        <Link to="/connexion" className="notLogin">
          <i className={headerIconNav1}></i>
          <Link to="/user" className="notLogin">
            <p>{headerNav2}</p>
          </Link>
          <i className={headerIconNav2}></i>

          <p>{headerNav1}</p>
        </Link>
      </header>
    </nav>
  );
}
