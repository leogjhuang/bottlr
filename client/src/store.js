import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//automatically takes from index.js so don't need to specify name of file
import rootReducer from "./reducers";

const initialState = {};

const middleWare = [thunk];

const composeCheck = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeCheck(applyMiddleware(...middleWare))
);

export default store;
