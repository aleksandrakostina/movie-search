import React from 'react';
import { connect } from 'react-redux';
import Movie from '../movies/Movie';
import './Watchlist.css';

const Watchlist = (props) => {

  const listFavoriteMovies = props.favoriteMovies.map(item => <Movie key={item.imdbID} item={item} />);
  
  return (
    <div className="watchlist">
      <div className="wrapper">
        <h2 className="watchlist__header">Your Watchlist</h2>
        <div className="watchlist__control">
          <div className="nav">
            <div className="watchlist_details">{props.favoriteMovies.length} Titles</div>
          </div>
        </div>
        {props.favoriteMovies.length !== 0 ? 
          (<div className="movies__container">
            {listFavoriteMovies}
          </div>) : (
          <div className="watchlist__empty">Your Watchlist is empty</div>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favoriteMovies: state.movies.favoriteMovies
  }
}

export default connect(mapStateToProps)(Watchlist);