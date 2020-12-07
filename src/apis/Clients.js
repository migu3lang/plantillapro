import Api from './Api';

export default {
    getClients(){
        return Api().get("/clients/list");
    },
}