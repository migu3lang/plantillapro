import {getModuloType} from '../actions/modulosActions';
const defaultState = [];

function reducer(state = defaultState, action){
   
    switch(action.type){
        case getModuloType: {

            localStorage.setItem("modulos",JSON.stringify(action.modulos));
               // state.push(action.modulos);
            //    return state;
        }
     
        default:
            if(localStorage.modulos != null){
                
                state=JSON.parse(localStorage.modulos);
            }
            return state;
    }

  
}

export default reducer;