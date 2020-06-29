import React, { Component } from 'react';
import Routes from './components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import '../index.css';
import { connect } from 'react-redux';

class Private extends Component {
  
  render() {
   
    return (
        <div className="flexible-content">
          <TopNavigation />
          <SideNavigation />
          <main id="content" className="p-5">
            <Routes />
          </main>
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  roles:state.roles
})

export default  connect(mapStateToProps)(Private);