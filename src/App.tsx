// npx generate-react-cli component MyComponent
import React, { useEffect, useState } from 'react';
import colours from './sass/_foundation/_colours.module.scss';
import Home from './pages/Home/Home';
import Extras from './pages/Extras/Extras';
import Projects from './pages/Projects/Projects';
import './styles.scss';
import Panels from './components/Panels/Panels';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

function App() {
  let backgroundColour: string = colours.grey1;

  let [transitionType, setTransitionType] = useState('');

  const setTransition = (type: string) => {
    console.log('transition: ' + type)
    // open and close states for home closing and projects opening
    setTransitionType(type);
  }
  
  return (
    <div className="app" style={{backgroundColor: backgroundColour}}>
      <Router>
        <NavBar setTransition={setTransition} />
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
        <Panels state={transitionType} />
        {/* { transitionType === 'transition' &&
        } */}
      </Router>
    </div>
  );
}

export default App;
