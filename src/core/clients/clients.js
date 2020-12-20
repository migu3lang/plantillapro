import React, { useEffect , useState } from 'react';
import clientsApi from '../../apis/Clients';
import ModalClient from './ModalClient';
import { Switch, Route,Link , NavLink , BrowserRouter as Router , Redirect} from 'react-router-dom';
import Institutions from '../institutions/Institutions';
import DataTableClients from '../clients/DataTableClients';


function Clients() {
    
    const [clients,setClients]=useState([]);
     const  sendData = (event) => {
         event.preventDefault();
         obtener();
     

    }   

    async function obtener(){
        clientsApi.getClients().then((response)=>{
                let clientesApi=response.data.clients;
                setClients(clientesApi)
        })

}

 useEffect(()=>{

     obtener();
     
 },[]);

    return (
        <div>

            <div className="card">
          
                <div className="card-header">
                    Clientes
                </div>
                <div className="card-body">
                <ModalClient
                textModalButton="Agregar Cliente"
                titleModal="Formulario creación cliente"
                sendData={sendData}
                ></ModalClient>
              {console.log(clients)}
              {clients.length>0 ?
                <DataTableClients clients={clients}></DataTableClients> : null
              }
            </div>

              

                </div>
        </div>
    )
}

export default Clients
