import React, { Component } from 'react';
import InstitutionsApi from '../../apis/Institutions';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {

    institutionInfo= {};

    state = {
        modal: false,
        textModalButton: "Modal",
        titleModal: "MDBModal title",
        form: {
            institutionName: "",
            institutionInfo: ""
        },
        errors: []
    }

    constructor(props){
        super();
        this.state.textModalButton = props.textModalButton == null ? this.state.textModalButton : props.textModalButton;
        this.state.titleModal = props.titleModal == null ? this.state.titleModal : props.titleModal;
    }

    toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
    this.clear();
    }

    autoCarga=(e)=>{
        this.institutionInfo[e.target.name] = e.target.value;
        this.setState({form: this.institutionInfo});
        // const element = e.target.name;
        // this.state.form[element] = e.target.value;
    }

    submit = (e) => {
        e.preventDefault();

        InstitutionsApi.newInstitution(this.state.form)
        .then(Response => {
            this.toggle();
            this.props.sendData();
        })
        .catch(error => { 
            if (error.response.status === 422) {
                this.setState({errors:error.response.data.errors});
            }
        });
    
    }

    clear = () => {
        this.setState({
            form:{
                institutionName: "",
                institutionInfo: ""
            },
            errors: []
        });
    }


    render() {
        return (
        <MDBContainer>
            <MDBBtn onClick={this.toggle}>{this.state.textModalButton}</MDBBtn>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>{this.state.titleModal}</MDBModalHeader>
                <MDBModalBody>
                    <form>
                        <div className="form-group">
                            <label htmlFor="institutionName">Nombre de la institución</label>
                            <input type="text" className="form-control" name="institutionName" 
                                onChange={this.autoCarga}
                            />
                            {this.state.errors.institutionName != null ? 
                                <span className="text-danger" >
                                    {this.state.errors.institutionName[0]}
                                </span>
                                :
                                null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="institutionInfo">Información institución</label>
                            <textarea className="form-control" name="institutionInfo" rows="3"
                                onChange={this.autoCarga}
                            ></textarea>
                            {this.state.errors.institutionInfo != null ? 
                                <span className="text-danger" >
                                    {this.state.errors.institutionInfo[0]}
                                </span>
                                :
                                null
                            }
                        </div>
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle}>Cerrar</MDBBtn>
                    <MDBBtn color="primary" onClick={this.submit}>Guardar</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
        );
    }
}

export default ModalPage;