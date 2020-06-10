import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Navbar from './sections/Navbar';
import Welcome from './views/Welcome';
import Register from './views/Register';
import Login from './views/Login';

class Public extends Component {
  render() {
    
    return (
        <div className="App">
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Welcome} />
          <div className="container-fluid">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          </Switch>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged
});

export default connect(mapStateToProps)(Public);