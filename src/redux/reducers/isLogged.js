import {loginType} from '../actions/loggingActions';
import {logOutType} from '../actions/loggingActions';

const defaultState = false;

function reducer(state = defaultState, action){
    switch(action.type){
        case loginType: {
            localStorage.setItem("token", action.token);
            state = true;
            return state;
        }
        case logOutType: {
            localStorage.removeItem("token");
            localStorage.removeItem("modulos");
            localStorage.removeItem("roles");
            state = false;
            return state;
        }
        default:
            if(localStorage.token != null){
                state = true;
            }
            return state;
    }
}

export default reducer;