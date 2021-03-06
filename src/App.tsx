import React from 'react';
import colours from './sass/_foundation/_colours.module.scss';
import Home from './pages/Home/Home';
import './styles.scss';
import Panels from './components/Panels/Panels';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  let backgroundColour: string = colours.pink;
  
  return (
    <div className="app" style={{backgroundColor: backgroundColour}}>
      <Router>
        <Panels/>
        <div className='container'>
          <Switch>
            <Home/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
