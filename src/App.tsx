// npx generate-react-cli component MyComponent
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import colours from './sass/_foundation/_colours.module.scss';
import './styles.scss';

import Panels from './components/Panels/Panels';
import NavBar from "./components/NavBar/NavBar";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Extras from './pages/Extras/Extras';

function App() {
  let backgroundColour: string = colours.white;

  let [transitionType, setTransitionType] = useState('');

  const setTransition = (type: string) => {
    // console.log('transition: ' + type)
    // open and close states for home closing and projects opening
    setTransitionType(type);
  }
  
  return (
    <div className="app" style={{backgroundColor: backgroundColour}}>
      <Router>
        <NavBar setTransition={setTransition} />
        <Switch>
          <Route exact path="/">
            <Home setTransition={setTransition} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="/extras">
            <Extras />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
        {/* <Panels state={transitionType} /> */}
        {/* { transitionType === 'transition' &&
        } */}
      </Router>
    </div>
  );
}

export default App;
