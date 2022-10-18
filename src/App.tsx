// npx generate-react-cli component MyComponent
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import colours from './sass/_foundation/_colours.module.scss';
import './styles.scss';

import Panels from './components/Panels/Panels';
import NavBar from "./components/NavBar/NavBar";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Extras from './pages/Extras/Extras';

const App: React.FC = () => {
  let backgroundColour: string = colours.white;

  let [timer, setTimer] = useState(false);
  let [transitionType, setTransitionType] = useState('close');

  const setTransition = (type: string) => {
    // console.log('transition: ' + type)
    // open and close states for home closing and projects opening
    setTransitionType(type);
  }

  // console.log(transitionType);

  const history = useHistory() 

   useEffect(() => {
      return history.listen((location) => { 
         console.log(`You changed the page to: ${location.pathname}`) 
      }) 
   },[history]) 
  
  
  return (
    <div className="app" style={{backgroundColor: backgroundColour}}>
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
      {/* TODO This transition is always to open up the current panels */}
      {/* { transitionType === 'transition' &&
        <Panels state={transitionType} />
      } */}
    </div>
  );
}

export default App;
