import React,{useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import DataTableInstitutions from '../institutions/DataTableInstitutions';
import { Switch, Route,Link , NavLink , BrowserRouter as Router , Redirect} from 'react-router-dom';
import ClientsModules from './ClientsModules';
import ModalEdit from "./ModalEditClients";


export default function DataTableClients(props) {
  const [datatable, setDatatable] = React.useState({});
  
  function loadData(){

    let data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Email',
            field: 'email',
            width: 270,
          },
          {
            label: 'Telefono',
            field: 'phone',
            width: 200,
          },
          {
            label: 'Acciones',
            field: 'action',
            width: 200,
          },
        
        ],
        rows: [
        ],
    
      }
      props.clients.map(client=>{
          var row ={
              name:client.name,
              email:client.email,
              phone:client.telefono,
              action:<div>
                <ModalEdit cliente={client} sendData={props.sendData}></ModalEdit>
                <button className="btn btn-primary"><Link to={{pathname:'/admin/modules', state:{id:client.id}}}>Modulos</Link></button></div>
            }
            data.rows.push(row);
           
            setDatatable(data)

      })
  }

  useEffect(()=>{

    loadData();
  
 },[props.clients])


 

  return (
   <div>
      
  <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />
  </div>);
}