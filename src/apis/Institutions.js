import Api from './Api';

export default {
    newInstitution(form){
        return Api().post("/institutions/newInstitution", form);
    },
    getAllInstitutions(){
        return Api().get("/institutions/getAllInstitutions");
    },
    getInstitution(idInstitution){
        return Api().post("/institutions/getInstitution",idInstitution);
    }
}