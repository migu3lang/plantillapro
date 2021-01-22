import Api from './Api';


export default {
    getAuth(){
        return Api().get("/roles/list");
    }
    
}