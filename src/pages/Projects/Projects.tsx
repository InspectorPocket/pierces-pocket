import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, Routes, Route } from 'react-router-dom';
import { getProjects } from '../../api/projects';
import { hexToRGB } from '../../helpers/utils';

import styles from './Projects.module.scss';
import panelWidth from '../../sass/_foundation/_panelWidth.module.scss'
import colours from '../../sass/variables/_primitives/_colour-palette.module.scss';

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
    <div className={styles.Projects}>
      {/* Main Module */}
      <div className={styles.Projects__Modules}>

        {/* <div className={`${styles.TV__Frame} ${styles.TV__Frame_Active}`}> */}
        <div className={`${styles.TV__Frame}`}>

          <div className={styles.TV}>

            {/* Put Project Module in here and pull out the info for the description */}
            {/* <div className={`${styles.TV__Top} ${styles.TV__Top_Active}`}> */}
            <div className={`${styles.TV__Top}`}>
              <div>
                {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_117_89449)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.49088 9.72314C3.83317 9.72314 4.11066 9.9879 4.11066 10.3145V14.9139C4.11066 15.2405 3.83317 15.5053 3.49088 15.5053C3.14858 15.5053 2.87109 15.2405 2.87109 14.9139V10.3145C2.87109 9.9879 3.14858 9.72314 3.49088 9.72314Z" fill={colours.green_60}/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.49088 2.49512C3.83317 2.49512 4.11066 2.75988 4.11066 3.08647V7.68591C4.11066 8.0125 3.83317 8.27726 3.49088 8.27726C3.14858 8.27726 2.87109 8.0125 2.87109 7.68591V3.08647C2.87109 2.75988 3.14858 2.49512 3.49088 2.49512Z" fill={colours.green_60}/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00015 8.40869C9.34245 8.40869 9.61993 8.67345 9.61993 9.00005V14.9136C9.61993 15.2402 9.34245 15.505 9.00015 15.505C8.65786 15.505 8.38037 15.2402 8.38037 14.9136V9.00005C8.38037 8.67345 8.65786 8.40869 9.00015 8.40869Z" fill={colours.green_60}/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00015 2.49512C9.34245 2.49512 9.61993 2.75988 9.61993 3.08647V6.37178C9.61993 6.69838 9.34245 6.96314 9.00015 6.96314C8.65786 6.96314 8.38037 6.69838 8.38037 6.37178V3.08647C8.38037 2.75988 8.65786 2.49512 9.00015 2.49512Z" fill={colours.green_60}/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5089 11.0366C14.8512 11.0366 15.1287 11.3014 15.1287 11.628V14.9133C15.1287 15.2399 14.8512 15.5046 14.5089 15.5046C14.1666 15.5046 13.8892 15.2399 13.8892 14.9133V11.628C13.8892 11.3014 14.1666 11.0366 14.5089 11.0366Z" fill={colours.green_60}/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5089 2.49512C14.8512 2.49512 15.1287 2.75988 15.1287 3.08647V9.00003C15.1287 9.32662 14.8512 9.59138 14.5089 9.59138C14.1666 9.59138 13.8892 9.32662 13.8892 9.00003V3.08647C13.8892 2.75988 14.1666 2.49512 14.5089 2.49512Z" fill={colours.green_60}/>
                  </g>
                  <defs>
                  <filter id="filter0_d_117_89449" x="0.871094" y="0.495117" width="16.2578" height="17.0103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="1"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0.15 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_117_89449"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_117_89449" result="shape"/>
                  </filter>
                  </defs>
                </svg> */}

                <h6>TOP</h6>
              </div>
              <h6>RIGHT</h6>
            </div>

            {/* <div className={`${styles.TV__Content} ${styles.TV__Content_Active} ${styles.Theme__Scroll__Green}`}> */}
            <div className={`${styles.TV__Content}`}>
              <Routes>
                <Route path=':projectId/*' element={<Project projects={projects} setCurrentProjectId={setCurrentProjectId} setNextProject={setNextProject} />} />
              </Routes>
            </div>

          </div>

        </div>

        {/* <div className={`${styles.Projects__Modules__Block} ${styles.Projects__Modules__Block_Active}`}> */}
        <div className={`${styles.Projects__Modules__Block}`}>
          {/* <ProjectDesc /> */}
          <div className={`${styles.lightModule} ${styles.ProjectDescription}`}>
            <div className={styles.ProjectDescription__Description}>
              <h2>LocalThrones</h2>
              <div className={styles.ProjectDescription__Description__Container}>
                <p>I was commissioned to create a logo for an electronic producer under the name Hanja. Hanja is the Korean name for Han Chinese characters (Chinese: 漢字; pinyin: hànzì). More specifically, it refers to those Chinese characters borrowed from Chinese and incorporated into the Korean language with Korean pronunciation. The task was to design the logo as well as envision the brand identity.</p>
              </div>
            </div>
            <div className={styles.ProjectDescription__Tags}>
              <h6>TAGS</h6>
              <h6>
              {/* <h6 style={{color: project.colour}}> */}
                Test Tag
                {/* { project.    role.ux ? "UX" : "" }
                { project.role.ux && project.role.dev || project.role.ux && project.role.brand || project.role.ux && project.role.graphic || project.role.ux && project.role.threeD ? " / " : "" }
                { project.role.dev ? "Dev" : "" }
                { project.role.dev && project.role.brand || project.role.dev && project.role.graphic || project.role.dev && project.role.threeD ? " / " : "" }
                { project.role.brand ? "Brand" : "" }
                { project.role.graphic && project.role.brand || project.role.brand && project.role.threeD ? " / " : "" }
                { project.role.graphic ? "GD" : "" }
                { project.role.graphic && project.role.threeD ? " / " : "" }
                { project.r     ole.threeD ? "3D" : "" } */}
              </h6>
            </div>
          </div>
          { projects && 
            <div className={styles.Projects__Modules__Block__Items__Wrapper}>
              <div className={styles.Projects__Modules__Block__Items}>
                { projects && projects.map((project, index) => (

                  // TODO make into a component?
                  // <ProjectTab className={blue} project=fuelius />
                  // Set all the colour combinations in here
                  <NavLink to={project.id} key={index}
                    className={({ isActive }) =>
                      isActive ? `${styles.lightModule} ${styles.ProjectTab} ${styles.ProjectTab__Active}` : `${styles.lightModule} ${styles.ProjectTab} `
                    }
                    style={({ isActive }) => ({
                      borderColor: isActive ? hexToRGB(project.colour, 0.5) : ''
                    })}
                    state= {{ index: index }}
                    onClick={() => setActiveProject(index) }>

                    {/* TODO Make separate component and pass colours into it */}
                    <div className={styles.ClickyButton}>
                      {/* TODO Make separate component and pass colours into it */}
                      {/* <ClickyButton /> */}
                      {/* <div className={styles.ClickyButton__Main} style={{backgroundColor: project.colour}}> */}
                      <div className={styles.ClickyButton__Main}>
                        <div className={styles.ClickyButton__Main__Centre}>
                          <span>0</span>
                        </div>
                      </div>
                      <div className={styles.ClickyButton__Stem}>
                        <div className={styles.ClickyButton__Stem__Ring}>
                          <span>0</span>
                        </div>
                      </div>

                    </div>

                    <h3>{ project.title }</h3>

                    {/* <div className={styles.ProjectOverview__project__text}>

                      

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

                      <div className={styles.ProjectOverview__project__logo}>
                        <img className={styles.ProjectOverview__project__logo__outline} src={ (imgUrl + project.id + '/logo_outline.svg') } />
                        <img className={styles.ProjectOverview__project__logo__full} src={ (imgUrl + project.id + '/logo.svg') } />
                      </div>

                      <span className={styles.ProjectOverview__project__gradient} style={{backgroundColor: project.colour}}></span>

                    </div> */}

                  </NavLink>

                ))}
              </div>
            </div>
          }
        </div>

      </div>
      {/* Side Spacing */}
      <div className={styles.Projects__Panel}>
        <h1>PROJECTS</h1>
        <Icon icon="projects" 
            currentProject={currentProjectId}
            projectsNumber={projects.length}
            onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
            active={hideProjectsMenu}
        />
      </div>

      {/* Current Project */}
      {/* <div className={(hideProjectsMenu ? styles.projects__wrapper_hide : '')}>
        <Routes>
          <Route path=':projectId/*' element={<Project projects={projects} setCurrentProjectId={setCurrentProjectId} setNextProject={setNextProject} />} />
        </Routes>
      </div> */}


      {/* Projects Overview */}
      {/* { projects &&
      <div className={`z-10 ${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}
        style={{pointerEvents: 'none'}}>
      </div>
      } */}
      {/* { projects && 
        <div className={`${styles.Projects__wrapper} ${(hideProjectsMenu ? '' : styles.Projects__wrapper_hide)}`}>

          <div className={styles.ProjectOverview__wrapper}>

            <div className={styles.ProjectOverview}> */}

                {/* { projects && projects.map((project, index) => (

                    // TODO make into a component?
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

                          <div className={styles.ProjectOverview__project__logo}>
                            <img className={styles.ProjectOverview__project__logo__outline} src={ (imgUrl + project.id + '/logo_outline.svg') } />
                            <img className={styles.ProjectOverview__project__logo__full} src={ (imgUrl + project.id + '/logo.svg') } />
                          </div>

                          <span className={styles.ProjectOverview__project__gradient} style={{backgroundColor: project.colour}}></span>

                        </div>

                      </NavLink>


                ))} */}

            {/* </div>

          </div>

        </div>
      } */}


      {/* Grid Icon */}
      {/* <div className={`${styles.projects__gridview} ${panelWidth.panelWidth} ${panelWidth.panelHeight} ${showGrid ? '' : styles.projects__gridview_hide}`}>

        <Icon icon="projects" 
          currentProject={currentProjectId}
          projectsNumber={projects.length}
          onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
          active={hideProjectsMenu}
        />

      </div> */}

    </div>
  );
};

export default Projects;
