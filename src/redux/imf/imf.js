import axios from 'axios';

import { shuffle } from 'lodash';

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
    const shuffledData = shuffle(data).slice(0, 1000);

    dispatch({ type: GET_DATA, payload: shuffledData });
  });
};

export default imfReducer;
