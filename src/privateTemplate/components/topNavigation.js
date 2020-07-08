import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {logOut} from '../../redux/actions/loggingActions';
import { MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavbarToggler, 
    MDBCollapse, 
    MDBNavItem, 
    MDBNavLink, 
    MDBIcon,
    MDBBtn  } from 'mdbreact';
import User from '../../apis/User';

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    logOut=(e)=>{
    
        e.preventDefault();
    
        User.logout().then(() => {
          this.props.logOut();
          this.props.history.push('/');
        });
        
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong>MDB</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="#">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/" target="_blank">About MDB</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/getting-started/download/" target="_blank">Free download</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer"  className="nav-link Ripple-parent" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank">Free tutorials</a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://pl-pl.facebook.com/mdbootstrap/"><MDBIcon fab icon="facebook" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/mdbootstrap"><MDBIcon fab icon="twitter" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>MDB GitHub</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://mdbootstrap.com/products/react-ui-kit/" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>Go Pro</a>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBBtn color="primary" onClick={this.logOut}>LogOut</MDBBtn>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.isLogged
  });
  
  const mapDispatchToProps = {
    logOut,
  };

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TopNavigation)
);