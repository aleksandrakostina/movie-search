import React from 'react';
import './SearchForm.css';
import {ReactComponent as Loader} from './../../assets/images/loader.svg';

const SearchForm = () => {
  return (
    <section className="search">
      <div className="wrapper search__wrapper">
        <form className="search-form" name="search-form">
          <div className="search__container">
            <input className="search__input" placeholder="Search movie" autofocus type="text"  />
            <Loader className="loader" />
            <span className="clear-button"></span>
          </div>
          <button class="button button_search" type="submit">Search</button>
        </form> 
      </div>
    </section>
  )
}

export default SearchForm;