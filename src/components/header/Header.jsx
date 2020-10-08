import React from 'react';
import './Header.css';
import logo from './../../assets/images/movie_logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <div className="header__logo">
          <img className="logo" src={logo} alt='logo' />
        </div>
        <div className="header__title">
          <h1>Search Movie</h1>
        </div>
      </div>   
    </header>
  )
}

export default Header;