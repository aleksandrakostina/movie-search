import React from 'react';
import Movies from '../movies/Movies';
import SearchForm from '../searchForm/SearchForm';

const Home = () => {

  return (
    <>    
      <SearchForm />
      <Movies />
    </>
  );
}

export default Home;