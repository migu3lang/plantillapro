import React, {Component} from 'react';
import InstitutionsApi from '../../apis/Institutions';
import { MDBDataTableV5 } from 'mdbreact';
import ModalEditInstitutions from './ModalEditInstitutions';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

class DataTableInstitutions extends Component{

    globalCheckboxes=[];

    constructor(){
        super();
        this.state = {
            dataTable: {},
            checkboxes: []
        }
    }
      
    loadDataTable=(institutions)=>{
        var dataTableTemp = {
            columns: [
                {
                    label: 'All',
                    field: 'checkbox',
                    sort: 'disabled'
                    },
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
                'checkbox': <input type="checkbox" className="form-check-input elements" name="elements[]" onClick={this.Clicker} value={institution.id}/>,
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

    Comparador=(elemento,comparar)=>{
        return elemento != comparar;
    }

    Clicker=(e)=>{
        
       if(e.target.checked === true)
       {
        this.globalCheckboxes.push(parseInt(e.target.value));
       }else if(e.target.checked === false)
       {
          const filter = this.globalCheckboxes.filter(el=>this.Comparador(el,e.target.value));
          this.globalCheckboxes = filter;
       }

       this.setState({checkboxes: this.globalCheckboxes});
       
    }

    cleanCheckboxes(){
        this.globalCheckboxes=[];
        this.setState({checkboxes: this.globalCheckboxes});

        var arrayCheck = Array.from(document.getElementsByClassName('elements'));
        
        arrayCheck.forEach( el => {
            el.checked = false;
        });
    }

    delete=(e)=>{
        e.preventDefault();
        
        Swal.fire({
            title: '¿Está seguro de eliminar los elementos seleccionados?',
            text: "¡No podrá revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                InstitutionsApi.deleteMultipleInstitutions(this.state.checkboxes)
                .then(response => {
                    this.cleanCheckboxes();
                    Swal.fire(
                        'Eliminados!',
                        'Los elementos seleccionados han sido eliminados.',
                        'success'
                    )
                    this.props.sendData();
                })
                .catch(error => { 
                    console.log(error);
                });
            }
          })
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
                {this.globalCheckboxes.length > 0 ? <button className="btn btn-danger" onClick={this.delete}>Eliminar</button> : null}
                
            </div>
        );
    }
}
export default DataTableInstitutions;