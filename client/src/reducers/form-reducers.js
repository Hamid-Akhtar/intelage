import {
  FORM_UPLOAD_FAIL,
  FORM_UPLOAD_REQUEST,
  FORM_UPLOAD_SUCCESS,
} from "../utils/constants";

export const formReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case FORM_UPLOAD_REQUEST:
      return { loading: true, data: [] };
    case FORM_UPLOAD_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case FORM_UPLOAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
