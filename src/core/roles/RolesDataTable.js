import React,{useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function RolesDataTable(props) {

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
                label: 'Acciones',
                field: 'action',
                width: 200,
              },
            
            ],
            rows: [

            
            ],
        
          }

          props.roles.map(role=>{
              var row={
                  name:role.name,
                  action: "none",
              }
              console.log(role);
              data.rows.push(row);
              setDatatable(data)
          })
    
       
    }

    useEffect(()=>{

        loadData();
      
     },[props.roles])

    
  return (
    <div>
    
   <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />
   </div>);

}

 
