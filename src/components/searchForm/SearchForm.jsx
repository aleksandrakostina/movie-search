import React, { useState } from 'react';
import './SearchForm.css';
import { ReactComponent as Loader } from './../../assets/images/loader.svg';
import { getMovies } from '../../redux/actionCreators';
import { connect } from 'react-redux';

const SearchForm = (props) => {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getMovies(value);
  }

  const handleClearInput = () => {
    setValue('');
  }

  return (
    <section className="search">
      <div className="wrapper search__wrapper">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search__container">
            <input className="search__input" 
                    placeholder="Search movie" 
                    autoFocus 
                    type="text" 
                    value={value} 
                    onChange={handleChange} />
            <Loader className="loader" />   
            <span className="clear-button" onClick={handleClearInput}></span>
          </div>
          <button className="button button_search">Search</button>
        </form> 
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.movies.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (search) => {
      dispatch(getMovies(search));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);