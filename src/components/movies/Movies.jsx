import React from 'react';
import Movie from './Movie';
import './Movies.css';

const Movies = () => {

  const movies = [
    {
      image: 'https://placehold.it/198x264&text=Image+Not+Found',
      rating: '9.0',
      title: 'Bla bla',
      year: '2000'
    },
    {
      image: 'https://placehold.it/300x264&text=Image+Not+Found',
      rating: '6.3',
      title: 'Star',
      year: '2010'
    }
  ];

  const moviesList = movies.map((item, index) => <Movie key={index} item={item} />);

  return (
    <section className="movies">
      <div className="wrapper movies__wrapper">
        <div className="movie-list">
          {moviesList}
        </div>   
      </div>
    </section>
  )
}

export default Movies;