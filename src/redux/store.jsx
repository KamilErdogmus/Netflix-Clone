import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import movieReducers from "./reducers/movieReducers";
import genreReducers from "./reducers/genreReducers";

const rootReducers = combineReducers({
  genres: genreReducers,
  movies: movieReducers,
});

export default createStore(rootReducers, applyMiddleware(thunk));
