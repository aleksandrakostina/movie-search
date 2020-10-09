import React from 'react';
import { ReactComponent as Play } from './../../assets/images/play-button.svg';
import { ReactComponent as Bookmark } from './../../assets/images/bookmark.svg';

const Movie = (props) => {
  
  const movie = props.item;

  return (
    <div className="movie__item">
      <div className="movie__poster">
        <img className="movie__poster-image" src={movie.Poster} />
        <div className="overlay"> 
          <div className="overlay__content">
            <Play className="play" />           
            <h4>Play</h4>
          </div>
        </div>
      </div>
      <div className="movie__info">
        <h4 className="movie__title">{movie.Title}</h4>             
        <h5 className="movie__year">{movie.Year}</h5>
      </div>
      <div className="movie__mark">
        <Bookmark className="bookmark" />
      </div>
    </div>
  )
}

export default Movie;