import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import Institutions from '../core/institutions/Institutions';

// core components
import Admin from './layouts/Admin';

import './assets/css/material-dashboard-react.css?v=1.9.0';

function Private() {
    return (
        <Switch>
            <Route path="/admin" component={Admin} />
            {/* <Route path="admin/about">
            <Institutions></Institutions>
          </Route> */}
            <Redirect from="/" to="/admin/dashboard" />


        </Switch>
    )
}

export default Private;
