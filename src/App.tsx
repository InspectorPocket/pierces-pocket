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
  let backgroundColour: string = colours.grey1;

  const hideProjectsMenuOnNav = (data: any) => {
    console.log(data);
  }
  
  return (
    <div className="app" style={{backgroundColor: backgroundColour}}>
      <Router>
        <Panels />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects hideProjectsMenuOnNav={hideProjectsMenuOnNav} />
          </Route>
          <Route path="/extras">
            <Extras />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
        
        {/* <div className={`${styles.projects__gridview} ${currentProject ? '' : styles.projects__gridview_hide}`}>

          <Icon icon="projects" 
            currentProject={currentProjectId}
            projectsNumber={loadedProjects.length}
            onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
            active={hideProjectsMenu}
          />

        </div> */}

      </Router>
    </div>
  );
}

export default App;
