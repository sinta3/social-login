import React from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'


import Login from './pages/Login/Login'
import Profil from './pages/Profil/Profil'

function App() {
  return (
        < Router>
          <Switch>
            <Route exact path="/">
                <Login/>
            </Route>

            <Route exact path="/profil">
                <Profil/>
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
