import React,{useEffect,useState} from 'react'
import rolesApi from '../../apis/Roles';
import RolesDataTable from './RolesDataTable';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { Switch, Route,Link , NavLink , BrowserRouter as Router , Redirect} from 'react-router-dom';

function Roles() {

   const [roles, setstate] = useState([]);




        async function obtener(){
            
            rolesApi.getAuth().then((response)=>{
            let apiRoles=response.data.roles
            setstate(apiRoles);
            })

        }

    

    useEffect(()=>{

        obtener();
        
    },[]);


    return (
        <div>
            

            <MDBCol>
      <MDBCard >
      
        <MDBCardBody>
          <MDBCardTitle>Roles y permisos</MDBCardTitle>
          <MDBCardText>
          <RolesDataTable roles={roles}></RolesDataTable>
          </MDBCardText>
          <MDBBtn ><Link to={{pathname:'/admin/crear/role'}}> mensaje</Link></MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        </div>
    )
}

export default Roles
