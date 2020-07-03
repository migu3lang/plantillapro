import React, {Component} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import ModalEditInstitutions from './ModalEditInstitutions';

class DataTableInstitutions extends Component{

    state = {
        dataTable: {}
    }
    
    loadDataTable=(institutions)=>{
        var dataTableTemp = {
            columns: [
                {
                label: 'Nombre Instituo',
                field: 'institutionName',
                sort: 'disabled'
                },
                {
                label: 'Información Instituto',
                field: 'institutionInfo',
                sort: 'disabled'
                },
                {
                label: 'Acciones',
                field: 'actions',
                sort: 'disabled'
                }
            ], 
            rows:[]
        };

        var rowsTemp = [];

        institutions.map(institution =>{
            var row = {
                'institutionName': institution.institutionName,
                'institutionInfo': institution.institutionInfo,
                'actions': <ModalEditInstitutions 
                                idInstitution={institution.id}
                                textModalButton="Editar" 
                                titleModal="Formulario Edición Instituciones"
                                sendData={this.props.sendData}
                            />
            }

            rowsTemp.push(row);
            dataTableTemp.rows = rowsTemp;
        });

        this.setState({dataTable: dataTableTemp});
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.institutions !== this.props.institutions){
           this.loadDataTable(this.props.institutions);
        }
    }

    render(){      
        return(
            <div>
                <MDBDataTableV5
                    responsive
                    scrollX 
                    hover 
                    entriesOptions={[5, 20, 25]} 
                    entries={5} 
                    pagesAmount={4} 
                    fullPagination 
                    data={this.state.dataTable}
                />
            </div>
        );
    }
}
export default DataTableInstitutions;