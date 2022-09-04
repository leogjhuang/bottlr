import { NavItem } from "reactstrap";
import {
  GET_BOTTLES,
  ADD_BOTTLE,
  DELETE_BOTTLE,
  BOTTLES_LOADING,
} from "../actions/types";
const initialState = {
  bottles: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOTTLES:
      return {
        ...state,
        bottles: action.payload,
        loading: false,
      };
    case DELETE_BOTTLE:
      return {
        ...state,
        bottles: state.bottles.filter(
          (bottle) => bottle._id !== action.payload
        ),
      };
    case ADD_BOTTLE:
      return {
        ...state,
        items: [action.payload, ...state.bottles],
      };
    case BOTTLES_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
