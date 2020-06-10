import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const Modal = () => {
    var state = {
        modal: false
    }
    
    function toggle (e) {
        e.preventDefault();
        state.modal = !state.modal;
    }

    return (
        <MDBContainer>
            <MDBBtn onClick={toggle}>Modal</MDBBtn>
            <MDBModal isOpen={state.modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                (...)
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}

export default Modal;