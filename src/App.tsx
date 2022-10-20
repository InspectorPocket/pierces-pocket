// npx generate-react-cli component MyComponent
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import colours from './sass/_foundation/_colours.module.scss';
import './styles.scss';

import Panels from './components/Panels/Panels';
import NavBar from "./components/NavBar/NavBar";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Extras from './pages/Extras/Extras';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  let backgroundColour: string = colours.white;

  let [timer, setTimer] = useState(false);
  let [transitionType, setTransitionType] = useState('close');
  let [projectsMenuStatus, setProjectsMenuStatus] = useState(false);

  const setTransition = (type: string) => {
    // console.log('transition: ' + type)
    // open and close states for home closing and projects opening
    setTransitionType(type);
  }

  const trackMenuHide = (status: boolean) => {
    setProjectsMenuStatus(status);
  }

  // console.log(transitionType);
  
  return (
    <div className="app" style={{backgroundColor: backgroundColour}}>
      <NavBar setTransition={setTransition} trackMenuHide={projectsMenuStatus} />
      <Routes>
        <Route path="/" element={<Home setTransition={setTransition} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/*" element={<Projects trackMenuHide={trackMenuHide} />} />
        <Route path="/extras" element={<Extras />} />
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Routes>
      {/* TODO This transition is always to open up the current panels */}
      {/* { transitionType === 'transition' &&
        <Panels state={transitionType} />
      } */}
    </div>
  );
}

export default App;
