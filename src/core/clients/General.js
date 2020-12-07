import React from 'react'
import { Switch, Route,Link , NavLink , BrowserRouter as Router , Redirect} from 'react-router-dom';
import Clients from './Clients';
import vista2 from './vista2';
import Institutions from '../institutions/Institutions';

export default function General() {
    return (
        <div>
            <Clients>

            </Clients>
            <Router>

            <Link to="/holas">About</Link>

            <Switch>
          <Route path="/holas">
            <Institutions></Institutions>
          </Route>
        
      
        </Switch>
        
            </Router>
        </div>
    )
}
