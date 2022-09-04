import { combineReducers } from "redux";
import bottleReducer from "./bottleReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  bottle: bottleReducer,
  error: errorReducer,
  auth: authReducer,
});
