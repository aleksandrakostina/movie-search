import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {

  return (
    <div className="error">
      <div className="wrapper">
        <div className="error__message">The requested URL was not found on our server.</div>
        <NavLink to="/">
          <button className="button button_home">Go to the homepage</button>
        </NavLink>
      </div>   
    </div>
  )
}

export default NotFound;