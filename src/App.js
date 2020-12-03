import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Private from './privateTemplate/Private';
import Private from './privateTemplate2/Private';
//import Public from './publicTemplate/Public';
import Public from './publicTemplate2/Public';

class App extends Component {
  
  render() {
    return (
    <div>
      {this.props.isLogged ? <Private/> : <Public/>}
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged
});

export default connect(mapStateToProps)(App);
