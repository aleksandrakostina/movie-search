import { getRating, getResult } from "../api/apiMovies/fetchMovies";
import { FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS, FETCH_SUCCESS_MOVIES } from "./actions";

export function fetchInit() {
  return { type: FETCH_INIT };
}

export function fetchSuccess(data, totalResults) {
  console.log(data)
  return { type: FETCH_SUCCESS, data, totalResults };
}

export function fetchFailure() {
  return { type: FETCH_FAILURE };
}

export function fetchSuccessMovies(data) {
  return { type: FETCH_SUCCESS_MOVIES, data }
}

export const getMovies = (search) => {
  return (dispatch) => {
    dispatch(fetchInit());
    getRating(search)
    .then(data=> {
      dispatch(fetchSuccess(data.Search, data.totalResults));
    })
    .catch(e =>
      dispatch(fetchFailure()));
  }
}

export const getResultMovies = (id) => {
  return (dispatch) => {
    dispatch(fetchInit());
    getResult(id)
    .then(data=> {
      dispatch(fetchSuccess(data));
    })
    .catch(e =>
      dispatch(fetchFailure()));
  }
}