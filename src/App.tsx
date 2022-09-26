// npx generate-react-cli component MyComponent
import React from 'react';
import colours from './sass/_foundation/_colours.module.scss';
import Home from './pages/Home/Home';
import Extras from './pages/Extras/Extras';
import Projects from './pages/Projects/Projects';
import './styles.scss';
import Panels from './components/Panels/Panels';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

function App() {
  let backgroundColour: string = colours.darker;
  
  return (
    <div className="app" style={{backgroundColor: backgroundColour}}>
      <Router>
        <Panels/>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/extras">
              <Extras />
            </Route>
            {/* <Route path="*">
              <NotFound />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
