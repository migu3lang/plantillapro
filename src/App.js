import React, { Component } from 'react';
import { connect } from 'react-redux';
import Private from './privateTemplate/Private';
import Public from './publicTemplate/Public';

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
