import { actionTypes } from "../actionTypes";
import api from "../../utils/api";

export const getGenres = () => (dispatch) => {
  dispatch({ type: actionTypes.GENRES_LOADİNG });

  const params = { region: "US" };

  api
    .get("/genre/movie/list", { params })
    .then((res) =>
      dispatch({ type: actionTypes.GENRES_SUCCESS, payload: res.data.genres })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.GENRES_ERROR, payload: err.message })
    );
};
