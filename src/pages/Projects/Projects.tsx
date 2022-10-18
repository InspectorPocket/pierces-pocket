import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RouteComponentProps, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import styles from './Projects.module.scss';

import ProjectsProps from "../../props/projectsProps";

import Panels from '../../components/Panels/Panels'
import Intro from '../../components/Intro/Intro';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";
import Loading from '../../components/Loading/Loading';
import Icon from '../../components/Icon/Icon';
import ProjectIntro from '../../components/Projects/Project/ProjectIntro/ProjectIntro';

import Project1 from '../Projects/Project1/Project1';
// import Project2 from '../Projects/Project2/Project2';

let _pProps: ProjectsProps;

interface LocationState {
  projects?: typeof _pProps[];
  project: {
    id: number;
    title: string;
    vocation: string;
    img: string;
  }
  active?: boolean;
}

const Projects: React.FC<ProjectsProps> = () => {
  
  // const location = useLocation<LocationState>();
  // const project = location.state.project || { from: { pathname: "/projects" } };

  // TODO Can I put Project data here instead of making a call?
  const { error, isPending, data: projects } = useFetch('http://localhost:8020/projects');

  let loadedProjects: Array<any> = [];
  
  let [hideProjectsMenu, setHideProjectsMenu] = useState(true);
  if (projects) loadedProjects = projects;

  let [transition, setTransition] = useState(false);
  let [currentProject, setCurrentProject] = useState();
  let [currentProjectId, setCurrentProjectId] = useState(99);
  let [nextProjectId, setNextProjectId] = useState();
  
  const location = useLocation();
  
  const projectsUrlMatch = new RegExp('\^/projects/?$');
  useEffect(() => {
    let cleanup = true;
    if (cleanup) {
      window.onpopstate = e => {
        if (projectsUrlMatch.test(window.location.pathname)) {
          setHideProjectsMenu(true);
          setCurrentProject(currentProject => currentProject = undefined);
          console.log('projects page');
          
        } else {
          setHideProjectsMenu(false);
          console.log('other page');
        }
      }
    }
    cleanup = false;
  }, []);
  
  const urlId = useParams();

  const setActiveProject = (activeProject: any, fromOverview: boolean = false) => {
    setCurrentProject(currentProject => currentProject = activeProject);
    setCurrentProjectId(currentProjectId => currentProjectId = activeProject.id);
    if (fromOverview) {
      setHideProjectsMenu(!hideProjectsMenu);
    }
    setTransition(!transition);
  }
  
  const setNextProject = (activeProject: any) => {
    setCurrentProject(currentProject => currentProject = projects![activeProject.id + 1]);
    setCurrentProjectId(currentProjectId => currentProjectId = activeProject.id + 1);
  }


  // const [count, setCount] = useState(99);

  // useEffect(() => {
  //   setCurrentProjectId(JSON.parse(window.localStorage.getItem('currentProjectId') || '99'));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('currentProjectId', JSON.stringify(currentProjectId) || '99');
  // }, [currentProjectId]);

  // const increaseCount = () => {
  //   return setCount(count + 1);
  // }
  // const decreaseCount = () => {
  //   return setCount(count - 1)
  // }

  // const [input, setInput] = useState("");
  // const [item, setComponent] = useLocalStorage("currentProjectId");

  // function useLocalStorage(key: string) {
  //   const [state, setState] = useState(localStorage.getItem(key));
  //   function setStorage(item: string) {
  //     localStorage.setItem(key, item);
  //     setState(item);
  //   }
  //   return [state, setStorage];
  // }

  let [idLocal, setIdLocal] = useState(localStorage.getItem("currentProjectId"));

  // useEffect(() => {
  //   localStorage.setItem('id', idLocal!);
  // }, [idLocal])
  console.log(idLocal);
  

  const setLocalStore = (projectId: number) => {
    setIdLocal(JSON.stringify(projectId));
    // return;
  }

  return (
    <div className={styles.projects}>

      
      <Router>

        {/* Current Project */}
        <div className={(hideProjectsMenu ? styles.projects__wrapper_hide : '')}>

          <Switch>

            {/* Pierce's Pocket */}
            <Route exact path="/projects/pierce's-pocket">
              <Project1 project={currentProject} projects={projects!} setActiveProject={setActiveProject} setNextProject={setNextProject} />
            </Route>

            {/* Localthrones */}
            <Route exact path="/projects/localthrones">
              <h1>Localthrones</h1>
            </Route>
            
          </Switch>

        </div>

        <Route>
          {/* { projects &&
          <div className={`container ${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}>
            <Intro page="projects" />
          </div>
          } */}
          {/* Projects Overview */}
          { projects && 
            <div className={`container ${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}>
              <ProjectOverview projects={projects} setActiveProject={setActiveProject} setLocalStore={setLocalStore} />
            </div>
          }
        </Route>

      </Router>

      {/* Grid Icon */}

        <div className={`${styles.projects__gridview} ${currentProject ? '' : styles.projects__gridview_hide}`}>

          <Icon icon="projects" 
            currentProject={currentProjectId}
            projectsNumber={loadedProjects.length}
            onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
            active={hideProjectsMenu}
          />

        </div>


      {/* TODO Fix this to load on every project */}
      {/* TODO Fix this to load on first load of projects */}
      { currentProject &&
        <Panels state={'transition'} />
      }

      { error && <div>{ error }</div> }
      { isPending && <Loading /> }

    </div>
  );
};

export default Projects;
