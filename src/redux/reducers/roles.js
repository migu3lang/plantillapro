import {getRoletype} from '../actions/rolesActions';
const defaultState = [];

function reducer(state = defaultState, action){
   
    switch(action.type){
        case getRoletype: {

            localStorage.setItem("roles", action.roles);
                state=action.roles;
           
                return state;
        }
     
        default:
            if(localStorage.roles != null){
                state = localStorage.roles;
            }
            return state;
    }
}

export default reducer;