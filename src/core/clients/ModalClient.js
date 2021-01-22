import React,{useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Email } from '@material-ui/icons'
import Client from '../../apis/Clients';

function ModalClient(props) {

    const [modal, setModal] = useState(false);
    const [textModalButton, setTextModalButton] = useState(props.textModalButton == null ? "Modal" : props.textModalButton);
    const [titleModal, setTitleModal] = useState(props.titleModal == null ? "MDBModal title" : props.titleModal)

    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [telefono,setTelefono]=useState('');
    const [error,setErrors]=useState([]);

    const toggle = () => {
        setModal(!modal);
      }

    const save=(event)=>{
        Client.storeClients({email,name,telefono}) .then(function (response) {
            props.sendData(event)
           toggle()
          }).catch(error => { 
            if (error.response.status === 422) {
                let apiErrores=error.response.data.errors
                setErrors(apiErrores);
            }
        });

        console.log(error);
    };

    return (
        <div>
            <MDBContainer>
                <MDBBtn onClick={toggle}>{textModalButton}</MDBBtn>
                <MDBModal isOpen={modal} toggle={toggle}>
                    <MDBModalHeader toggle={toggle}>{titleModal}</MDBModalHeader>
                    <MDBModalBody>
                
                    <form>
                    <div className="form-group">
                        <label htmlFor="institutionName">Nombre del cliente</label>
                        <input type="text" className="form-control" name="name" onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="institutionName">Correo electronico</label>
                        <input type="email" className="form-control" name="email" onChange={(event) => setEmail(event.target.value)} 
                        />
                    </div>

                    {error.email != null ? 
                                <span className="text-danger" >
                                    {error.email[0]}
                                </span>
                                :
                                null
                            }

                    <div className="form-group">
                        <label htmlFor="institutionName">Telefono</label>
                        <input type="text" className="form-control" name="phone" onChange={(event) => setTelefono(event.target.value)} 
                        />
                    </div>

                    {error.telefono != null ? 
                                <span className="text-danger" >
                                    {error.telefono[0]}
                                </span>
                                :
                                null
                            }

                 
                </form>
                     
                    </MDBModalBody>
                    <MDBModalFooter>
                      
                        <MDBBtn color="secondary" onClick={toggle}>Cancelar</MDBBtn>
                        <MDBBtn color="primary" onClick={(event)=>{save(event)}} >Guardar</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        </div>
    )
}

export default ModalClient
