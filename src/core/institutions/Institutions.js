import React, {Component} from 'react';
import ModalFormInstitutions from './ModalFormInstitutions';
import DataTableInstitutions from './DataTableInstitutions';
import InstitutionsApi from '../../apis/Institutions';

class Institutions extends Component{

    constructor(){
        super();
      this.state={
        dataTable: {}
      }
      console.log("crea clase Institutions");
    }

    componentDidMount(){
        this.sendData();
    }

    sendData = () => {

        InstitutionsApi.dataTableInstitution()
        .then(Response => {
          this.setState({dataTable: Response.data.dataTable});
        }).catch(error => {
            console.log("dataTableInstitution: " + error);
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
                    />
                    <DataTableInstitutions dataTable={this.state.dataTable}/>
                </div>
            </div>
        );
    }
}
export default Institutions;