import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import localStorage, { loadState } from '../middleware/localstorage';

const initialState = loadState();
const store = createStore(reducer, initialState, applyMiddleware(localStorage()));

export default store;