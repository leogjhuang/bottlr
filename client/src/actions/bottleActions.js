import axios from 'axios';
import { GET_BOTTLES, ADD_BOTTLE, DELETE_BOTTLE, BOTTLES_LOADING} from "./types";

export const getBottles = () => dispatch =>{
  dispatch(setBottlesLoading());
  axios
    .get('api/bottles')
    .then(res => dispatch({
      type: GET_BOTTLES,
      payload: res.data
    }))
};
export const addBottle = bottle => dispatch =>{
  axios
    .post('/api/bottles', bottle)
    .then(res => dispatch({
      type: ADD_BOTTLE,
      payload: res.data
    }))
};
export const deleteBottle = id => dispatch =>{
  axios
    .delete(`/api/bottles/${id}`)
    .then(res => dispatch({
      type: DELETE_BOTTLE,
      payload: id
    }))
};
export const setBottlesLoading = () => {
  return {
    type: BOTTLES_LOADING
  }
}