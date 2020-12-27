import Api from './Api';

export default {
    getClients(){
        return Api().get("/clients/list");
    },
    storeClients(form){
        return Api().post("/clients/store",form);
    },

    getModulos(admincliente){
        return Api().get("/clients/getmodules/"+admincliente);
    },

    saveModules(admincliente,form){
            return Api().post("/clients/mas/"+admincliente,form);
    }
}