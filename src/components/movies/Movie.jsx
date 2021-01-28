import React, { useState } from 'react';
import { ReactComponent as Play } from './../../assets/images/play-button.svg';
import { NavLink } from 'react-router-dom';
import { deleteFavoriteMovie, getMovieDetails, addFavoriteMovie } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import moviePlaceholderImage from './../../assets/images/poster-placeholder.png';
import { ReactComponent as Plus } from './../../assets/images/plus.svg';
import { ReactComponent as Check } from './../../assets/images/check-mark-button.svg';

const Movie = (props) => {
  const movie = props.item;
  const [isFavourite, setIsFavourite] = useState(props.favoriteMovies.find(id => id.imdbID === movie.imdbID) ? true : false)
  
  const addFavouriteMovie = () => {
    setIsFavourite(!isFavourite);
    if(isFavourite) {
      props.deleteFavoriteMovie(movie);
    } else {
      props.addFavoriteMovie(movie);
    }
  }

  return (
    <div className="movie__item">
      <NavLink to={`/movie/${movie.imdbID}`}>
        <div className="movie__poster" onClick={() => props.getMovie(movie.imdbID)}>
          <img className="movie__poster-image" src={movie.Poster !== "N/A" ? movie.Poster : moviePlaceholderImage} alt={movie.Title} />
          <div className="overlay"> 
            <div className="overlay__content">
              <Play className="play" />           
              <h4>Play</h4>
            </div>
          </div>
        </div>
      </NavLink>
      <div className="movie__info">
        <NavLink to={`/movie/${movie.imdbID}`} className="movie__title">{movie.Title}</NavLink>         
        <h5 className="movie__year">{movie.Year}</h5>
      </div>
      <div className="movie__mark" onClick={addFavouriteMovie} title={isFavourite ? "Click to remove from watchlist" : "Click to add to watchlist"}>
        {isFavourite ? <Check className="bookmark check" /> : <Plus className="bookmark plus" />}     
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favoriteMovies: state.movies.favoriteMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => {
      dispatch(getMovieDetails(id));
    },
    addFavoriteMovie: (id) => {
      dispatch(addFavoriteMovie(id));
    },
    deleteFavoriteMovie: (id) => {
      dispatch(deleteFavoriteMovie(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);