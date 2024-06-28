import { actionTypes } from "../actionTypes";
import api from "../../utils/api";

export const getPopuler = () => (dispatch) => {
  dispatch({
    type: actionTypes.MOVIES_LOADİNG,
  });

  const params = {
    region: "US",
  };

  api
    .get("/movie/popular", { params })
    .then((res) =>
      dispatch({
        type: actionTypes.MOVIES_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};
