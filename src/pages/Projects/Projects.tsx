import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, Routes, Route } from 'react-router-dom';
import { getProjects } from '../../api/projects';
import { hexToRGB } from '../../helpers/utils';

import styles from './Projects.module.scss';

import Icon from '../../components/Icon/Icon';
import Intro from '../../components/Intro/Intro';
import Panels from '../../components/Panels/Panels'
import Loading from '../../components/Loading/Loading';

import Project from '../../components/Projects/Project/Project';
import Project1 from '../Projects/Project1/Project1';
// import Project2 from '../Projects/Project2/Project2';

const Projects: React.FC = () => {

  const imgUrl: string = '/images/';
  const projects: Array<any> = getProjects();
  const projectsUrlMatch = new RegExp('\^/projects/?$');
  const location = useLocation();
  const regexPathname = projectsUrlMatch.test(location.pathname);
  
  let [hideProjectsMenu, setHideProjectsMenu] = useState(true);
  let [showGrid, setShowGrid] = useState(false);
  let [transition, setTransition] = useState(false);

  let [currentProjectId, setCurrentProjectId] = useState(99);
  let [currentProject, setCurrentProject] = useState();
  let [nextProjectId, setNextProjectId] = useState();

  useEffect(() => {
    let cleanup = true;
    if (cleanup) {
      if (regexPathname) {
        setHideProjectsMenu(true);
        setShowGrid(false);
      } else if (!regexPathname) {
        setHideProjectsMenu(false);
        setShowGrid(true);
      }
    };
    cleanup = false;
  }, [location]);

  const setActiveProject = (index: number) => {
    setCurrentProjectId(currentProjectId => currentProjectId = index);
    setHideProjectsMenu(false);
    setShowGrid(true);
    // if (fromOverview) {
      // setTransition(!transition);
    // }
  }
  
  const setNextProject = (activeProject: any) => {
    setCurrentProject(currentProject => currentProject = projects![activeProject.id + 1]);
    setCurrentProjectId(currentProjectId => currentProjectId = activeProject.id + 1);
  }

  return (
    <div className={styles.projects}>

      {/* Current Project */}
      <div className={(hideProjectsMenu ? styles.projects__wrapper_hide : '')}>
        <Routes>

          <Route path=':projectId/*' element={<Project projects={projects} setCurrentProjectId={setCurrentProjectId} setNextProject={setNextProject} />} />

          {/* <Route path="/projects/pierce's-pocket" 
            element={<Project1 project={currentProject} projects={projects} setActiveProject={setActiveProject} setNextProject={setNextProject} />} /> */}

          {/* <Route path="/projects/pierce's-pocket" element={<h1>Pierce's Pocket</h1>} />
          <Route path="/projects/localthrones" element={<h1>Localthrones</h1>} /> */}
          
        </Routes>
      </div>


      {/* Projects Overview */}
      { projects &&
      <div className={`container ${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}>
        <Intro page="projects" />
      </div>
      }
      { projects && 
        <div className={`container ${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}>

          <div className={styles.ProjectOverview}>

            {/* TODO Lazy load images? */}
            { projects && projects.map(({ title, colour, ux, dev, brand, graphic, id, index }) => (

              <NavLink to={id} key={id}
                className={({ isActive }) =>
                  isActive ? `${styles.ProjectOverview__project} ${styles.ProjectOverview__project_active}` : `${styles.ProjectOverview__project}`
                }
                style={({ isActive }) => ({
                  borderColor: isActive ? hexToRGB(colour, 0.2) : ''
                })}
                state= {{ index: index }}
                onClick={() => setActiveProject(index) }>

                <div className={styles.ProjectOverview__project__img}>
                  <img src={ (imgUrl + id + '/main.jpeg') } />
                </div>

                <div className={styles.ProjectOverview__project__text}>

                  <h4 className={styles.ProjectOverview__project__text__heading}>{ title }</h4>

                  <div className={styles.ProjectOverview__project__text__vocation}>

                    <div className={styles.ProjectOverview__project__text__vocation__bar}>
                      <span style={{backgroundColor: colour}}></span>
                    </div>

                    <h6>
                      { ux ? "UX" : "" }
                      { ux && dev || ux && brand ? " / " : "" }
                      { dev ? "Dev" : "" }
                      { dev && brand ? " / " : "" }
                      { brand ? "Brand" : "" }
                    </h6>
                    
                  </div>

                  <div className={styles.ProjectOverview__project__logo}>
                    <img className={styles.ProjectOverview__project__logo__outline} src={ (imgUrl + id + '/logo_outline.svg') } />
                    <img className={styles.ProjectOverview__project__logo__full} src={ (imgUrl + id + '/logo.svg') } />
                  </div>

                </div>

              </NavLink>

            ))}

          </div>
        </div>
      }


      {/* Grid Icon */}
      <div className={`${styles.projects__gridview} ${showGrid ? '' : styles.projects__gridview_hide}`}>

        <Icon icon="projects" 
          currentProject={currentProjectId}
          projectsNumber={projects.length}
          onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
          active={hideProjectsMenu}
        />

      </div>


      {/* TODO Fix this to load on every project */}
      {/* TODO Fix this to load on first load of projects */}
      {/* { currentProject &&
        <Panels state={'transition'} />
      } */}

    </div>
  );
};

export default Projects;
