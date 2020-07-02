import {getRoletype} from '../actions/rolesActions';
const defaultState = [];

function reducer(state = defaultState, action){
   
    switch(action.type){
        case getRoletype: {
            localStorage.setItem("roles", JSON.stringify(action.roles));
            return JSON.parse(localStorage.roles);
        }
        default:{
            if(localStorage.roles != null){
                state = JSON.parse(localStorage.roles);
            }
            return state;
        }
    }
}

export default reducer;