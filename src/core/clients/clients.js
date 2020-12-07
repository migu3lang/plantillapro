import React, { useEffect } from 'react';
import clientsApi from '../../apis/Clients';
import ModalClient from './ModalClient';


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

                </div>
            </div>

        </div>
    )
}

export default Clients
