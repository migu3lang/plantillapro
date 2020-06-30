import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import Institutions from '../../core/institutions/Institutions';
import Areas from '../../core/areas/Areas';
import { connect } from 'react-redux';

class Routes extends React.Component {

  
  verificarModulos=(nombreModulo)=>{
    var validator=this.props.modulos.find(modulo=>modulo.nombreModulo === nombreModulo);

   
   if( typeof validator === 'undefined'){

        return false;
   }else{
     return true;
   }

  }

  render() {
     
      console.log(this.verificarModulos('institutions'))
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        
        <Route path='/404' component={NotFoundPage} />

    { this.verificarModulos('institutions') ? <Route path='/institutions' component={Institutions} /> :  <Route path='/institutions' component={DashboardPage} /> }

        <Route path='/areas' component={Areas} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  modulos:state.modulos
});

export default connect (mapStateToProps)(Routes);
