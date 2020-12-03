import { createStore, combineReducers } from 'redux';
import isLogged from './reducers/isLogged';
import roles from './reducers/roles';
import modulos from './reducers/modulos';
import fixedPluginOpen from './reducers/fixedPluginOpen';
import dashBoardRoutes from './reducers/dashBoardRoutes';

const reducer = combineReducers({
    isLogged,
    roles,
    modulos,
    fixedPluginOpen,
    dashBoardRoutes
});

const store = createStore(reducer);

export default store;