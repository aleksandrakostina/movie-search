import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './reducer';

const reducers = combineReducers({
  movies: moviesReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;