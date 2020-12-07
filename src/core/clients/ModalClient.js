import React,{useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

function ModalClient(props) {

    const [modal, setModal] = useState(false);
    const [textModalButton, setTextModalButton] = useState(props.textModalButton == null ? "Modal" : props.textModalButton);
    const [titleModal, setTitleModal] = useState(props.titleModal == null ? "MDBModal title" : props.titleModal)

    const toggle = () => {
        setModal(!modal);
      }

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
                        <input type="text" className="form-control" name="name" 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="institutionName">Correo electronico</label>
                        <input type="email" className="form-control" name="email" 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="institutionName">Telefono</label>
                        <input type="text" className="form-control" name="phone" 
                        />
                    </div>

                 
                </form>
                     
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="danger" >Eliminar</MDBBtn>
                        <MDBBtn color="secondary" onClick={toggle}>Cancelar</MDBBtn>
                        <MDBBtn color="primary" >Actualizar</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        </div>
    )
}

export default ModalClient
