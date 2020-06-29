import {getModuloType} from '../actions/modulosActions';
const defaultState = [];

function reducer(state = defaultState, action){
   
    switch(action.type){
        case getModuloType: {

            localStorage.setItem("modulos", action.modulos);
                state=action.modulos;
           
                return state;
        }
     
        default:
            if(localStorage.modulos != null){
                state = localStorage.modulos;
            }
            return state;
    }

  
}

export default reducer;