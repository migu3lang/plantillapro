import { createStore, combineReducers } from 'redux';
import isLogged from './reducers/isLogged';
import roles from './reducers/roles';
import modulos from './reducers/modulos';

const reducer = combineReducers({
    isLogged,roles,modulos
});

const store = createStore(reducer);

export default store;