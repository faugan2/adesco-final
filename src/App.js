import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Splash from './screens/Splash';
import Home from "./screens/Home";
import Vision from "./screens/Vision";
import Activites from "./screens/Activites";
import Rapports from "./screens/Rapports";
import AvisBulletins from "./screens/AvisBulletins";
import ApprochesIntervention from "./screens/ApprochesIntervention";
import AxesStrategiques from "./screens/AxesStrategiques";
import Planification from "./screens/Planification";
import Organigramme from "./screens/Organigramme";
import Status from "./screens/Status";
import Travailler from "./screens/Travailler";
import Don from "./screens/Don";
import Projets from "./screens/Projets";
import Adhesion from "./screens/Adhesion";
import Donateurs from "./screens/Donateurs";
import GalerieImage from "./screens/GalerieImage";
import GalerieVideo from "./screens/GalerieVideo";
import ActivitesDetails from "./screens/ActivitesDetails";
import Photos from "./screens/Photos";
import { Translator, T, TF, LanguageList, Config } from 'react-translator-component'
Config.default = 'fr';
Config.list = {
  en: {
    text: 'English',
    
  },
  tr: {
    text: 'French',
    
  }
}

function App() {
  return (
    <Router>
      <Translator>
      <ScrollToTop>
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

          <Route path="/rapports" exact>
            <Rapports />
          </Route>

          <Route path="/avis-bulletins" exact>
            <AvisBulletins />
          </Route>

          <Route path="/vision" exact>
            <Vision />
          </Route>

          <Route path="/approches-intervention" exact>
            <ApprochesIntervention />
          </Route>

          <Route path="/axes-strategiques" exact>
            <AxesStrategiques />
          </Route>

          <Route path="/planification" exact>
            <Planification />
          </Route>

          <Route path="/organigramme" exact>
            <Organigramme />
          </Route>
        

          <Route path="/status-agrements" exact>
            <Status />
          </Route>

          <Route path="/travailler-avec-adesco" exact>
            <Travailler />
          </Route>

          <Route path="/faire-un-don" exact>
            <Don />
          </Route>

          <Route path="/nos-projets" exact>
            <Projets />
          </Route>

          <Route path="/adhesion" exact>
            <Adhesion />
          </Route>

          <Route path="/devenir-benevole" exact>
            <Donateurs />
          </Route>

          <Route path="/galerie-images" exact>
            <GalerieImage />
          </Route>

          <Route path="/galerie-videos" exact>
            <GalerieVideo />
          </Route>

          <Route path="/details-activite" exact>
            <ActivitesDetails />
          </Route>

          <Route path="/photos" exact>
            <Photos />
          </Route>

        </Switch>
        </ScrollToTop>
        </Translator>
    </Router>
  );
}

export default App;
