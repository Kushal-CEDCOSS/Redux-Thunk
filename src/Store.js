import { fetchReducer } from './Reducers/index';
import { applyMiddleware, createStore } from 'redux';
const thunk = require('redux-thunk').default;


const store = createStore(fetchReducer, applyMiddleware(thunk));

export default store;