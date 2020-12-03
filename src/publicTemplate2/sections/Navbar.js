import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Welcome
                </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged
});

export default withRouter(
    connect(mapStateToProps)(Navbar)
);