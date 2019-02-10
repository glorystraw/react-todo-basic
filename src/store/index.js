import { createStore, applyMiddleware,compose } from 'redux';
import reducer from '../reducers';
import localStorage, { loadState } from '../middleware/localstorage';
import todos from './todos';


const initialState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(localStorage())));

export default store;