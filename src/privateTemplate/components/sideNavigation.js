import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class sideNavigation extends Component {

    verificarModulos=(nombreModulo)=>{
        var validator=this.props.modulos.find(modulo=>modulo.nombreModulo === nombreModulo);

        if( typeof validator === 'undefined'){
            return false;
        }else{
            return true;
        }
    }

    render(){
        
        return (
            <div className="sidebar-fixed position-fixed">
                <a href="#!" className="logo-wrapper waves-effect">
                    <img alt="MDB React Logo" className="img-fluid" src={logo}/>
                </a>
                <MDBListGroup className="list-group-flush">
                    <NavLink exact={true} to="/" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="chart-pie" className="mr-3"/>
                            Dashboard
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/profile" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-3"/>
                            Profile
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/tables" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="table" className="mr-3"/>
                            Tables
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/maps" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="map" className="mr-3"/>
                            Maps
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/404" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="exclamation" className="mr-3"/>
                            404
                        </MDBListGroupItem>
                    </NavLink>
                    {this.verificarModulos("institutions") ?
                        <NavLink to="/institutions" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="university" className="mr-3"/>
                                Instituciones
                            </MDBListGroupItem>
                        </NavLink>
                        :
                        null
                    }
                    <NavLink to="/areas" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="university" className="mr-3"/>
                            Áreas
                        </MDBListGroupItem>
                    </NavLink>
                </MDBListGroup>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => ({
    modulos:state.modulos
});

export default connect(mapStateToProps)(sideNavigation);