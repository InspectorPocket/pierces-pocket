import React from 'react';
import colours from './sass/_foundation/_colours.module.scss';
import Logo from './components/atoms/Logo/Logo';
import PanelLeft from './components/organisms/PanelLeft/PanelLeft';
import PanelRight from './components/organisms/PanelRight/PanelRight';
import Home from './components/pages/Home/Home';
import './styles.scss';
import Panels from './components/organisms/Panels/Panels';

function App() {
  let backgroundColour: string = colours.pink;
  
  return (
    <div className="app" style={{backgroundColor: backgroundColour}}>
      {/* <PanelLeft/> */}
      {/* <PanelRight/> */}
      <Home/>
      <Panels/>
    </div>
  );
}

export default App;
