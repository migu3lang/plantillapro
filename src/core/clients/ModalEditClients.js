import React,{useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Client from '../../apis/Clients';


function ModalEdit(props) {
    
    const [client,SetClient]=useState("");
    const [modal, setModal] = useState(false);
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [telefono,setTelefono]=useState('');
    const [error,setErrors]=useState([]);

    const toggle = () => {
        setModal(!modal);
        let propieties=props.cliente;
        setName(propieties.name);
        setEmail(propieties.email);
        setTelefono(propieties.telefono);
       
      }

      const save=(event)=>{
        Client.editClient(props.cliente.id,{email,name,telefono}) .then(function (response) {
             props.sendData(event)
           toggle()
          }).catch(error => { 
            if (error.response.status === 422) {
                let apiErrores=error.response.data.errors
               
            }
        });

        console.log(error);
    };

      
    return (
      <>
      
      <MDBContainer>
      <MDBBtn onClick={toggle}>Modal</MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>Editar cliente  </MDBModalHeader>
        <MDBModalBody>
          
       
        <div className="form-group">
                        <label htmlFor="institutionName">Nombre del cliente</label>
                        <input type="text" className="form-control" name="name" value={name}  onChange={(event) => setName(event.target.value)} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="institutionName">Correo electronico</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={(event) => setEmail(event.target.value)} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="institutionName">Telefono</label>
                        <input type="text" className="form-control" name="phone" value={telefono} onChange={(event) => setTelefono(event.target.value)} 
                        />
                    </div>


        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
          <MDBBtn color="primary" onClick={(event)=>{save(event)}}>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
      
      </>
    );
  }
  
  export default ModalEdit