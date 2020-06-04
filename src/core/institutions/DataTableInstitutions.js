import React, {Component} from 'react';
import { MDBDataTableV5 } from 'mdbreact';

class DataTableInstitutions extends Component{

    constructor(){
        super();
        this.state = {
            dataTable: {}
        }
        console.log("crea clase DataTableInstitutions");
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate");
        if(prevProps.dataTable != this.props.dataTable){
            console.log(this.props.dataTable);
            this.setState({dataTable: this.props.dataTable});
        }
    }

    render(){
        console.log("render clase DataTableInstitutions");      
        return(
            <div>
                <MDBDataTableV5
                    scrollX 
                    hover 
                    entriesOptions={[5, 20, 25]} 
                    entries={5} 
                    pagesAmount={4} 
                    data={this.state.dataTable} 
                    fullPagination 
                />
            </div>
        );
    }
}
export default DataTableInstitutions;