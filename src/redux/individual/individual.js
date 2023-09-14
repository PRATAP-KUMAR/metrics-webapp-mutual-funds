import axios from 'axios';

const GET_INDIVIDUAL_DATA = 'GET_INDIVIDUAL_DATA';
const API = 'https://api.mfapi.in/mf';

const initialState = {
  meta: {},
  data: [],
  status: '',
};

const getIndividualDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INDIVIDUAL_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const getIndividualDataAction = (id) => (dispatch) => {
  axios.get(`${API}/${id}`).then((response) => {
    const { data } = response;
    dispatch({ type: GET_INDIVIDUAL_DATA, payload: data });
  });
};

export default getIndividualDataReducer;
