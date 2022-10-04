import axios from 'axios';

const GET_DATA = 'GET_DATA';
const API = 'https://api.mfapi.in/mf';

const initialState = [];

const imfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const getDataAction = () => (dispatch) => {
  axios.get(API).then((response) => {
    const { data } = response;
    dispatch({ type: GET_DATA, payload: data });
  });
};

export default imfReducer;
