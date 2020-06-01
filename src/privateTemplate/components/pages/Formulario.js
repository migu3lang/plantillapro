import React, { Component } from 'react';
import User from "../../../apis/User";


class Formulario extends Component {

    constructor() {
        super();
        this.state = {
            form: {
                name: "",
              
            },
            errors: {}
        };
    }

    autoCarga=(e)=>{
        const element = e.target.name;
        this.state.form[element] = e.target.value;
        console.log(this.state.form)
    }

    login=(e)=>{
        e.preventDefault()
        User.form(this.state.form).then(response=>{console.log('exito')}).catch(error=>{console.log(error)});
      
    }

  render() {
    return (
        <div className="card">

        <form onSubmit={this.login}>
        <div className="card-body">
          <div className="form-group">
            <label>test</label>
            <input className="form-control" name="name"  onChange={this.autoCarga}/>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">guardar</button>
        </div>
        </form>
      </div>
    )
  }
}

export default Formulario;