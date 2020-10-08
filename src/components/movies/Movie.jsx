import React from 'react';
import { ReactComponent as Play } from './../../assets/images/play-button.svg';
import { ReactComponent as Bookmark } from './../../assets/images/bookmark.svg';

const Movie = (props) => {
  
  const movie = props.item;

  return (
    <div class="movie__item">
      <div class="movie__poster">
        <img class="movie__poster-image" src={movie.image} />
        <h4 class="movie__rating">{movie.rating}</h4>
        <div class="overlay"> 
          <div class="overlay__content">
            <Play className="play" />           
            <h4>Play</h4>
          </div>
        </div>
      </div>
      <div class="movie__info">
        <h4 class="movie__title">{movie.title}</h4>             
        <h5 class="movie__year">{movie.year}</h5>
      </div>
      <div class="movie__mark">
        <Bookmark className="bookmark" />
      </div>
    </div>
  )
}

export default Movie;