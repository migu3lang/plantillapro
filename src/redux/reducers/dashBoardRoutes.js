import routes from "../../privateTemplate2/routes";
import {preicfesRoutes} from "../../privateTemplate2/routes";
import {loadPreicfesRoutesType} from '../actions/dashBoardRoutesActions';
import {findModule} from '../../helpers/findModule';

const dashboardRoutes = routes;

function reducer(state = dashboardRoutes, action){
    switch(action.type){
        case loadPreicfesRoutesType:{
            state = dashboardRoutes;
            var modulosusario = [];
            
            if(localStorage.modulos != null){
                modulosusario=JSON.parse(localStorage.modulos);
            }
            
            preicfesRoutes.map((modulo, key) => {
                if(findModule(modulosusario, modulo.name)){
                    state.push(modulo);
                }
            });

            return state;
        }
        default:{
            return state;
        }
    }
}

export default reducer;