import axios from "axios";
import { ApiUrl } from "../utils/Api";
import {
  FORM_UPLOAD_FAIL,
  FORM_UPLOAD_REQUEST,
  FORM_UPLOAD_SUCCESS,
} from "../utils/constants";

export const formAction = (data) => (dispatch) => {
  dispatch({ type: FORM_UPLOAD_REQUEST });
  const url = ApiUrl;
  axios
    .post(`${url}/api/post`, data)
    .then((res) => {
      dispatch({
        type: FORM_UPLOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FORM_UPLOAD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};
