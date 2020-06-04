import Api from './Api';

export default {
    newInstitution(form){
        return Api().post("/institutions/newInstitution", form);
    },
    dataTableInstitution(){
        return Api().post("/institutions/dataTableInstitution");
    }
}