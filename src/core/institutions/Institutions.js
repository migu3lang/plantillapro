import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import ModalFormInstitutions from './ModalFormInstitutions';
import DataTableInstitutions from './DataTableInstitutions';
import InstitutionsApi from '../../apis/Institutions';

class Institutions extends Component{

    state = {
        institutions: {},
        show:false

    }

    constructor(){
        super();
      this.sendData = this.sendData.bind(this);
    }

    componentDidMount(){
        this.sendData();
    }

    sendData = () => {

        InstitutionsApi.getAllInstitutions()
        .then(Response => {
          this.setState({institutions: Response.data.institutions});
        }).catch(error => {
            console.log("institutions: " + error);
            this.props.history.push('/');
        });

    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Instituciones
                </div>
                <div className="card-body">
                    <ModalFormInstitutions
                        textModalButton="Agregar Institución"
                        titleModal="Formulario creación instituciones"
                        sendData={this.sendData}
                    />
                    <DataTableInstitutions institutions={this.state.institutions} sendData={this.sendData}/>
                </div>
            </div>
        );
    }
}
export default withRouter(Institutions);