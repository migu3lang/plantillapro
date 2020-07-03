import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {login} from '../../redux/actions/loggingActions';
import {getRoles} from '../../redux/actions/rolesActions';
import {getModulos} from '../../redux/actions/modulosActions';

import User from '../../apis/User';

class Login extends Component {

    loginInfo= {
        device_name: "browser"
    };

    constructor() {
        super();
        this.state = {
            form: {
                email: "",
                password: "",
                device_name: "browser"
            },
            errors: {}
        };
    }

    autoCarga=(e)=>{
        this.loginInfo[e.target.name] = e.target.value;
        this.setState({form: this.loginInfo});
        // const element = e.target.name;
        // this.state.form[element] = e.target.value;
    }

    login=(e)=>{
        e.preventDefault()

        
        User.login(this.state.form)
        .then(response => {
            this.props.login(response.data.token);
            this.props.getRoles(response.data.roles);
            this.props.getModulos(response.data.modulos);
            this.props.history.push('/');
        })
        .catch(error => {
          if ( error.response.status === 422) {
              this.setState({errors:  error.response.data.errors});
          }
        });
    }

  render() {
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.login}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        Please sign in
                    </h1>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                            onChange={this.autoCarga}
                        />
                        {this.state.errors.email != null ? 
                            <span className="text-danger" >
                                {this.state.errors.email[0]}
                            </span>
                            :
                            null
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            onChange={this.autoCarga}
                        />
                        {this.state.errors.password != null ? 
                            <span className="text-danger" >
                                {this.state.errors.password[0]}
                            </span>
                            :
                            null
                        }
                    </div>
                    <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    roles:state.roles
});

const mapDispatchToProps = {
    login,
    getRoles,
    getModulos

};

export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(Login)
);