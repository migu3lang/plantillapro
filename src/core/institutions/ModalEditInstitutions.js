import React, { Component } from 'react';
import InstitutionsApi from '../../apis/Institutions';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalEditInstitutions extends Component {

  editInfo= {}

  constructor(props){
      super();
      this.state = {
        modal: false,
        textModalButton: props.textModalButton == null ? "Modal" : props.textModalButton,
        titleModal: props.titleModal == null ? "MDBModal title" : props.titleModal,
        form: {
          idInstitution: "",
          institutionName: "",
          institutionInfo: ""
        },
        errors: []
      }
  }


  loadInstitution(idInstitution){
    InstitutionsApi.getInstitution(idInstitution)
    .then(response => {
      var institution = response.data.institution;

      var initialForm = {
        idInstitution: institution.id,
        institutionName: institution.institutionName,
        institutionInfo: institution.institutionInfo
      };

      this.editInfo = initialForm;
      this.setState({form: initialForm});
    })
    .catch(error => {
      console.log(error);
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    
    this.clear();
    this.loadInstitution(this.props.idInstitution);
  }

  autoCarga=(e)=>{
    this.editInfo[e.target.name] = e.target.value;
    this.setState({form: this.editInfo});
  }

  submit = (e) => {
      e.preventDefault();
      InstitutionsApi.editInstitution(this.state.form)
      .then(response => {
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
                            onChange={this.autoCarga} value={this.state.form.institutionName}
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
                            onChange={this.autoCarga} value={this.state.form.institutionInfo}
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

export default ModalEditInstitutions;