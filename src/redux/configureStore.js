import { configureStore, combineReducers } from '@reduxjs/toolkit';
import imfReducer from './imf/imf';
import getIndividualDataReducer from './individual/individual';

const reducer = combineReducers({ imfReducer, getIndividualDataReducer });

const store = configureStore({ reducer });

export default store;
