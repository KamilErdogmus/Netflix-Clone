import { actionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  genres: [],
};

const genreReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GENRES_LOADİNG:
      return { ...state, isLoading: true };
    case actionTypes.GENRES_ERROR:
      return { ...state, isLoading: false, error: payload };
    case actionTypes.GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        genres: payload,
      };
    default:
      return state;
  }
};
export default genreReducers;
