import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Splash from './screens/Splash';
import Home from "./screens/Home";
import PageContent from "./screens/PageContent";
import Activites from "./screens/Activites";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/client" exact>
            <Splash />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/activites" exact>
            <Activites />
          </Route>

          <Route path="/page-content" exact>
            <PageContent />
          </Route>
        
        </Switch>
    </Router>
  );
}

export default App;
