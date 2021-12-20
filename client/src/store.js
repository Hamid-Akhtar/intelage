import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { formReducer } from "./reducers/form-reducers";

const reducer = combineReducers({
  formState: formReducer,
});

const initialState = { name: "Shahrukh" };
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
