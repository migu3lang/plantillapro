import {handleFixedPluginType} from '../actions/fixedPluginActions';

const defaultState = false;

function reducer(state = defaultState, action){
    switch(action.type){
        case handleFixedPluginType:{
            state = !state;
            return state;
        }
        default:{
            return state;
        }
    }
}

export default reducer;