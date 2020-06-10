import React, { Component } from 'react';
import User from '../../apis/User';

class Register extends Component {

    constructor(){
        super();
        this.state={
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: []
        };
    }

    autoCarga=(e)=>{
        const element = e.target.name;
        this.state.form[element] = e.target.value;
    }

    register=(e)=>{
        e.preventDefault();

        User.register(this.state.form).then(()=>{
            this.props.history.push('/login');
        }).catch(error => {
            if (error.response.status === 422) {
                this.setState({errors:error.response.data.errors});
            }
        });
    }
  render() {
    
    return (
        <form onSubmit={this.register}>
                <div className="home col-5 mx-auto py-5 mt-5">
                    <h1 className="text-center">Register</h1>
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={this.autoCarga}
                                />
                                {this.state.errors.name != null ? 
                                    <span className="text-danger" >
                                     {this.state.errors.name[0]}
                                    </span>
                                    :
                                    null
                                }
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
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
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
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
                            <div className="form-group">
                                <label htmlFor="password_confirmation">Confirm Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password_confirmation"
                                    onChange={this.autoCarga}
                                />
                                {this.state.errors.password_confirmation != null ? 
                                    <span className="text-danger" >
                                     {this.state.errors.password_confirmation[0]}
                                    </span>
                                    :
                                    null
                                }
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </form>
    )
  }
}

export default Register;