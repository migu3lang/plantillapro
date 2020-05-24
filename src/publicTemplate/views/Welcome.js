import React, { Component } from 'react';
import { connect } from 'react-redux';

class Welcome extends Component {
  render() {
    
    return (
    <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    isLogged: state.isLogged
});

export default connect(mapStateToProps)(Welcome);