import React, { useEffect } from 'react';
import clientsApi from '../../apis/Clients';
import ModalClient from './ModalClient';
import { Switch, Route,Link , NavLink , BrowserRouter as Router , Redirect} from 'react-router-dom';
import Institutions from '../institutions/Institutions';


function Clients() {

   const  sendData = (event) => {
    event.preventDefault();
      console.log('si entro');

    }   

 useEffect(()=>{

    clientsApi.getClients().then(Response=>{
        console.log(Response.data)
    })
 },[])

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

               <NavLink to="/admin/about">nacho</NavLink>

            </div>

              

                </div>
        </div>
    )
}

export default Clients
