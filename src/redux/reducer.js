import { GET_MOVIES_NEXT_PAGE_SUCCESS, SET_SEARCH_VALUE, ADD_FAVORITE_MOVIE, DELETE_FAVORITE_MOVIE, GET_MOVIES_INIT, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, GET_MOVIE_DETAILS_SUCCESS, GET_MOVIE_DETAILS_INIT, GET_MOVIE_DETAILS_ERROR, GET_MOVIES_NEXT_PAGE_INIT, GET_MOVIES_NEXT_PAGE_ERROR } from "./actions";

const defaultValueDataMovie = (data = {}) => ({data: data, isLoading: false, error: false, errorMessage: ''});

const initialState = {
  movies: defaultValueDataMovie({Response: '', Search: [], totalResults: ''}),
  movie: defaultValueDataMovie(),
  search: '',
  favoriteMovies: JSON.parse(localStorage.getItem('movie-favourites')) || []
};

export const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        search: action.search
      }
    case ADD_FAVORITE_MOVIE:
      localStorage.setItem('movie-favourites', JSON.stringify([...state.favoriteMovies, action.id]));
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.id]
      }
    case DELETE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(movie => movie.imdbID !== action.id.imdbID)
      }
    case GET_MOVIES_INIT:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: true,
          error: false,
          errorMessage: '',
          //data: state.movies.data
        }
      }
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          data: action.data
        }
      }
    case GET_MOVIES_ERROR:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          error: true,
          errorMessage: action.data.Error,
        }
      }
    case GET_MOVIE_DETAILS_INIT:
      return {
        ...state,
        movie: {
          isLoading: true,
          error: false,
          errorMessage: '',
          data: {}
        }
      }
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: {
          ...state.movie,
          isLoading: false,
          data: action.data
        }
      }
    case GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        movie: {
          ...state.movie,
          isLoading: false,
          error: true,
          errorMessage: action.data.Error,
        }
      }
    case GET_MOVIES_NEXT_PAGE_INIT:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: true,
          error: false,
          errorMessage: '',
        }
      }
    case GET_MOVIES_NEXT_PAGE_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: {
            Search: [...state.movies.data.Search, ...action.data.Search]
          },
          isLoading: false
        }
      }
    case GET_MOVIES_NEXT_PAGE_ERROR:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          error: true,
          errorMessage: action.data.Error
        }
      }
    default:
      return state;
  }
}