import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

import {findModule} from '../../helpers/findModule';

import logo from "../assets/mdb-react.png";



class sideNavigation extends Component {

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
                    {findModule(this.props.modulos, "institutions") ?
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