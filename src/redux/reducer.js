import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS_MOVIES } from "./actions";

const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  totalResult: '',
  allMovies: []
};

export const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        movies: action.data,
        totalResult: action.totalResult,
        isLoading: false,
        isError: false
      };
    case FETCH_FAILURE: 
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case FETCH_SUCCESS_MOVIES:
      return {
        ...state,
        allMovies: action.data,
        isLoading: false,
        isError: false
      }
    default:
      return state;
  }
}