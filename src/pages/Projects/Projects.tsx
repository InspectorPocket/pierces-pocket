import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, Routes, Route } from 'react-router-dom';
import { getProjects } from '../../api/projects';
import { hexToRGB } from '../../helpers/utils';

import styles from './Projects.module.scss';
import panelWidth from '../../sass/_foundation/_panelWidth.module.scss'

import Panels from '../../components/Panels/Panels'
import Icon from '../../components/Icon/Icon';
import Intro from '../../components/Intro/Intro';
import Project from '../../components/Projects/Project/Project';

interface ProjectsProps {
  trackMenuHide: Function;
}

const Projects: React.FC<ProjectsProps> = ({trackMenuHide}) => {

  const imgUrl: string = '/images/';
  const projects: Array<any> = getProjects();
  const projectsUrlMatch = new RegExp('\^/projects/?$');
  const location = useLocation();
  const regexPathname = projectsUrlMatch.test(location.pathname);
  
  let [hideProjectsMenu, setHideProjectsMenu] = useState(true);
  let [showGrid, setShowGrid] = useState(false);
  let [currentProjectId, setCurrentProjectId] = useState(99);
  
  let [panelState, setPanelState] = useState('projects');

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

  useEffect(() => {
    let cleanup = true;
    if (cleanup) {
      if (hideProjectsMenu) setPanelState('projects');
      else if (!hideProjectsMenu) setPanelState('fixed');
      trackMenuHide(hideProjectsMenu)
    };
    cleanup = false;
  }, [hideProjectsMenu])

  const setActiveProject = (index: number) => {
    setCurrentProjectId(currentProjectId => currentProjectId = index);
    setHideProjectsMenu(false);
    setShowGrid(true);
  }
  
  const setNextProject = (activeProject: any) => {
    setCurrentProjectId(currentProjectId => currentProjectId = activeProject.id + 1);
  }

  return (
    <div className={styles.projects}>

      {/* Panels */}
      <Panels state={panelState} showGrid={showGrid} />
      

      {/* Current Project */}
      <div className={(hideProjectsMenu ? styles.projects__wrapper_hide : '')}>
        <Routes>
          <Route path=':projectId/*' element={<Project projects={projects} setCurrentProjectId={setCurrentProjectId} setNextProject={setNextProject} />} />
        </Routes>
      </div>


      {/* Projects Overview */}
      { projects &&
      <div className={`container z-10 ${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}
        style={{pointerEvents: 'none'}}>
        <Intro page="projects" />
      </div>
      }
      { projects && 
        <div className={`${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}>

          <div className={styles.ProjectOverview__wrapper}>

            <div className={styles.ProjectOverview}>

                { projects && projects.map((project, index) => (

                    
                      <NavLink to={project.id} key={index}
                        className={({ isActive }) =>
                          isActive ? `${styles.ProjectOverview__project} ${styles.ProjectOverview__project_active}` : `${styles.ProjectOverview__project} `
                        }
                        style={({ isActive }) => ({
                          borderColor: isActive ? hexToRGB(project.colour, 0.5) : ''
                        })}
                        state= {{ index: index }}
                        onClick={() => setActiveProject(index) }>

                        <div className={styles.ProjectOverview__project__img} style={{backgroundColor: project.colour}}>
                          <img src={ (imgUrl + project.id + '/thumbnail.png') } />
                        </div>

                        <div className={styles.ProjectOverview__project__text}>

                          <h4 className={styles.ProjectOverview__project__text__heading}>{ project.title }</h4>

                          <div className={styles.ProjectOverview__project__text__vocation}>

                            <div className={styles.ProjectOverview__project__text__vocation__bar}>
                              <span style={{backgroundColor: project.colour}}></span>
                            </div>

                            <h6>
                              { project.role.ux ? "UX" : "" }
                              { project.role.ux && project.role.dev || project.role.ux && project.role.brand || project.role.ux && project.role.graphic || project.role.ux && project.role.threeD ? " / " : "" }
                              { project.role.dev ? "Dev" : "" }
                              { project.role.dev && project.role.brand || project.role.dev && project.role.graphic || project.role.dev && project.role.threeD ? " / " : "" }
                              { project.role.brand ? "Brand" : "" }
                              { project.role.graphic && project.role.brand || project.role.brand && project.role.threeD ? " / " : "" }
                              { project.role.graphic ? "GD" : "" }
                              { project.role.graphic && project.role.threeD ? " / " : "" }
                              { project.role.threeD ? "3D" : "" }
                            </h6>
                            
                          </div>

                          {/* <p className={styles.ProjectOverview__featured__main__description}>{ project.description }</p> */}

                          <div className={styles.ProjectOverview__project__logo}>
                            <img className={styles.ProjectOverview__project__logo__outline} src={ (imgUrl + project.id + '/logo_outline.svg') } />
                            <img className={styles.ProjectOverview__project__logo__full} src={ (imgUrl + project.id + '/logo.svg') } />
                          </div>

                          <span className={styles.ProjectOverview__project__gradient} style={{backgroundColor: project.colour}}></span>

                        </div>

                      </NavLink>


                ))}

            </div>

          </div>

        </div>
      }


      {/* Grid Icon */}
      <div className={`${styles.projects__gridview} ${panelWidth.panelWidth} ${panelWidth.panelHeight} ${showGrid ? '' : styles.projects__gridview_hide}`}>

        <Icon icon="projects" 
          currentProject={currentProjectId}
          projectsNumber={projects.length}
          onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
          active={hideProjectsMenu}
        />

      </div>

    </div>
  );
};

export default Projects;
