// npx generate-react-cli component MyComponent
import React from 'react';
import colours from './sass/_foundation/_colours.module.scss';
import styles from "./components/Panels/PanelRight/PanelRight.module.scss";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import './styles.scss';
import Panels from './components/Panels/Panels';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PanelRight from './components/Panels/PanelRight/PanelRight';
import Project from "./components/Projects/Project/Project";

function App() {
  let backgroundColour: string = colours.darker;
  
  return (
    <div className="app" style={{backgroundColor: backgroundColour}}>
      <Router>
        <Panels/>
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/project/:id">
              <Project />
            </Route>
            {/* <Route path="*">
              <NotFound />
            </Route> */}
          </Switch>
        </div>
        <div className={styles.PanelRight__container}>
          <PanelRight/>
        </div>
      </Router>
    </div>
  );
}

export default App;
