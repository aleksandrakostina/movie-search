import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { ReactComponent as WatchlistIcon } from './../../assets/images/watchlist.svg'

const Header = () => {

  return (
    <div className="header">
      <div className="wrapper header__wrapper">
        <div className="header__logo">
          <NavLink to="/">
            <h1 className="logo__text">Movie.tv</h1>
          </NavLink>
        </div>
        <div className="header__navbar">
          <div className="header__watchlist-button">
          <NavLink to="/watchlist">
            <WatchlistIcon className="watchlist-icon" />
            <span>Watchlist</span>
          </NavLink>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Header;