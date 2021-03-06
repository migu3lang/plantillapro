import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {findModule} from '../../helpers/findModule';

import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import Institutions from '../../core/institutions/Institutions';
import Areas from '../../core/areas/Areas';


class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/institutions' component={findModule(this.props.modulos, "institutions") ? Institutions : DashboardPage} />
        <Route path='/areas' component={Areas} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  modulos:state.modulos
});

export default connect(mapStateToProps)(Routes);
