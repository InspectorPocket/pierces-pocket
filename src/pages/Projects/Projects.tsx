import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import styles from './Projects.module.scss';
import { RouteComponentProps, useLocation } from "react-router-dom";

import ProjectsProps from "../../props/projectsProps";

import Intro from '../../components/Intro/Intro';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";
import Loading from '../../components/Loading/Loading';
import Icon from '../../components/Icon/Icon';

import Project1 from '../Projects/Project1/Project1';

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

  let [currentProject, setCurrentProject] = useState();
  let [currentProjectId, setCurrentProjectId] = useState();
  
  const urlId = useParams();

  const setActiveProject = (activeProject: any) => {
    setCurrentProject(currentProject => currentProject = activeProject);
    setCurrentProjectId(currentProjectId => currentProjectId = activeProject.id);
    setHideProjectsMenu(!hideProjectsMenu);
  }

  return (
    <div className={styles.projects}>

      {/* Current Project */}
      <div className={(hideProjectsMenu ? styles.projects__wrapper_hide : '')}>

        {/* Pierce's Pocket */}
        { projects && currentProject && currentProjectId === 0 &&
          <Project1 project={currentProject} projects={projects} />
        }

        {/* LocalThrones */}
        {/* { project.id === 1 &&
          <Project2 project={project} projects={projects} />
        } */}

      </div>

      {/* Projects Overview */}
      { projects && 
        <div className={`${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}>
          <ProjectOverview projects={projects} setActiveProject={setActiveProject} />
        </div>
      }

      {/* Grid Icon */}
      { projects &&
        <div className={`${styles.projects__gridview} ${currentProject ? '' : styles.projects__gridview_hide}`}>

          <Icon icon="projects" iconIndex={0} 
            currentProject={currentProjectId}
            projectsNumber={loadedProjects.length}
            onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
            active={hideProjectsMenu}
          />

        </div>
      }

      { error && <div>{ error }</div> }
      { isPending && <Loading /> }

    </div>
  );
};

export default Projects;
