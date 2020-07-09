import Api from './Api';

export default {
    newInstitution(form){
        return Api().post("/institutions/newInstitution", form);
    },
    getAllInstitutions(){
        return Api().get("/institutions/getAllInstitutions");
    },
    getInstitution(idInstitution){
        return Api().post("/institutions/getInstitution",{'idInstitution': idInstitution});
    },
    editInstitution(form){
        return Api().post("/institutions/editInstitution",form);
    },
    deleteInstitution(idInstitution){
        return Api().post("/institutions/deleteInstitution",{'idInstitution': idInstitution});
    },
    deleteMultipleInstitutions(arrayIdInstitutions){
        return Api().post("/institutions/deleteMultipleInstitutions",{'arrayIdInstitutions': arrayIdInstitutions});
    }
}