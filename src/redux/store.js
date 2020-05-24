import { createStore, combineReducers } from 'redux';
import isLogged from './reducers/isLogged'

const reducer = combineReducers({
    isLogged
});

const store = createStore(reducer);

export default store;