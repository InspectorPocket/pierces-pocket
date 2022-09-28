import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import styles from './Projects.module.scss';
import { RouteComponentProps, useLocation } from "react-router-dom";

import ProjectsProps from "../../props/projectsProps";

import Panels from '../../components/Panels/Panels'
import Intro from '../../components/Intro/Intro';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";
import Loading from '../../components/Loading/Loading';
import Icon from '../../components/Icon/Icon';

import Project1 from '../Projects/Project1/Project1';
import Project2 from '../Projects/Project2/Project2';

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
  let [currentProjectId, setCurrentProjectId] = useState();
  let [nextProjectId, setNextProjectId] = useState();
  
  const urlId = useParams();

  const setActiveProject = (activeProject: any) => {
    setCurrentProject(currentProject => currentProject = activeProject);
    setCurrentProjectId(currentProjectId => currentProjectId = activeProject.id);
    setHideProjectsMenu(!hideProjectsMenu);
    setTransition(!transition);
  }
  
  const setNextProject = (activeProject: any) => {
    setCurrentProject(currentProject => currentProject = projects![activeProject.id + 1]);
    setCurrentProjectId(currentProjectId => currentProjectId = activeProject.id + 1);
  }

  // let projectsToShow: any;
  // if (projects) {
  //   projectsToShow = loadedProjects.map(project => {
  //     switch (project.id) {
  //       case 0:
  //         return <Project1 project={currentProject} projects={projects} setNextProject={setNextProject} />;
  //       case 1:
  //         return <Project2 project={currentProject} projects={projects} setNextProject={setNextProject} />;
      
  //       default:
  //         break;
  //     }
  //     console.log(project.id);
      
  //   });
  // }

  return (
    <div className={styles.projects}>

      {/* TODO Move to position when projects button is pressed */}
      <Panels state={'fixed'} />

      {/* Current Project */}
      <div className={(hideProjectsMenu ? styles.projects__wrapper_hide : '')}>

        {/* TODO instead of using id, set project load using the url name/id? */}
        {/* OR use a router (like app.ts) and switch through routes depending on url
            this approach would hopefully allow for the back button and refresh to work as intended */}
        {/* Pierce's Pocket */}
        { projects && currentProject && currentProjectId === 0 &&
          <Project1 project={currentProject} projects={projects} setNextProject={setNextProject} />
        }

        {/* LocalThrones */}
        { projects && currentProject && currentProjectId === 1 &&
          <Project2 project={currentProject} projects={projects} setNextProject={setNextProject} />
        }

      </div>

      { projects && 
        <Intro page="projects" />
      }
      {/* Projects Overview */}
      { projects && 
        <div className={`container ${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}>
          <ProjectOverview projects={projects} setActiveProject={setActiveProject} />
        </div>
      }

      {/* Grid Icon */}
      { projects &&
        <div className={`${styles.projects__gridview} ${currentProject ? '' : styles.projects__gridview_hide}`}>

          <Icon icon="projects" 
            currentProject={currentProjectId}
            projectsNumber={loadedProjects.length}
            onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
            active={hideProjectsMenu}
          />

        </div>
      }

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
