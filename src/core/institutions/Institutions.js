import React, {Component} from 'react';
import ModalFormInstitutions from './ModalFormInstitutions';

class Institutions extends Component{

    constructor(){
        super();

        this.actualizar = this.actualizar.bind(this);
    }

    actualizar = () => {
        alert("transacción exitosa");
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
                        actualizar={this.actualizar}
                    />
                </div>
            </div>
        );
    }
}
export default Institutions;