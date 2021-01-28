import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { getMovies, getMoviesNextPage } from '../../redux/actionCreators';
import Movie from './Movie';
import './Movies.css';
import { ReactComponent as Loading } from './../../assets/images/loading.svg';

const Movies = (props) => {

  const page = useRef(1);

  const handleClickMoreButton = () => {
    page.current++;
    props.getMoviesNextPage(props.search, page.current);
  }

  const NumberMoviesPerPage = 10;

  const totalPages = Math.ceil(props.totalResults / NumberMoviesPerPage);

  const moviesList = props.movies.map(item => <Movie key={item.imdbID} item={item} />);

  return (
    <section className="movies">
      <div className="wrapper movies__wrapper">
        <div className="movies__container">
          {moviesList}
        </div>
        {(moviesList.length !== 0 && totalPages !== page.current) && 
          <button className="button button_more" onClick={handleClickMoreButton}>{props.isLoading ? <Loading className="loading" /> : "More"}</button>
        }
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies.data.Search,
    search: state.movies.search,
    totalResults: state.movies.movies.data.totalResults,
    isLoading: state.movies.movies.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesNext: (search, page) => {
      dispatch(getMoviesNextPage(search, page));
    },
    getMovies: (search, page) => {
      dispatch(getMovies(search, page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);