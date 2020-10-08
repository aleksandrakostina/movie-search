import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Movies from './components/movies/Movies';
import SearchForm from './components/searchForm/SearchForm';

const App = () => {

  return (
    <>
      <Header />
      <SearchForm />
      <Movies />
    </>
  );
}

export default App;
