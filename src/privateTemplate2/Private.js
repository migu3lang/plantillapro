import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';

// core components
import Admin from './layouts/Admin';
import RTL from './layouts/RTL';

import './assets/css/material-dashboard-react.css?v=1.9.0';

function Private() {
    return (
        <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/rtl" component={RTL} />
            <Redirect from="/" to="/admin/dashboard" />
        </Switch>
    )
}

export default Private;
