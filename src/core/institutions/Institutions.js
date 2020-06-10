import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import ModalFormInstitutions from './ModalFormInstitutions';
import DataTableInstitutions from './DataTableInstitutions';
import InstitutionsApi from '../../apis/Institutions';

class Institutions extends Component{

    state = {
        institutions: {}
    }

    constructor(){
        super();
      console.log("crea clase Institutions");
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
            if(error.response.status === 401){
                this.props.history.push('/');
            }
        });

    }

    render(){
      console.log("render clase Institutions");
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
                    <DataTableInstitutions institutions={this.state.institutions}/>
                </div>
            </div>
        );
    }
}
export default withRouter(Institutions);