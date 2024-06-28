import { actionTypes } from "../actionTypes";

const initialState = { isLoading: false, error: null, movies: [] };

const movieReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.MOVIES_LOADİNG:
      return { ...state, isLoading: true };
    case actionTypes.MOVIES_ERROR:
      return { ...state, isLoading: false, error: payload };
    case actionTypes.MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        movies: payload.results,
      };
    default:
      return state;
  }
};
export default movieReducers;
