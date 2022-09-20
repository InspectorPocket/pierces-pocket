import React, { useEffect, useState } from 'react';
import useFetch from "../../../hooks/useFetch";
import styles from './Project.module.scss';
// import helpers from '../../../sass/_abstracts/_helpers.module.scss';
import ProjectsProps from "../../../props/projectsProps";
// import MediaQuery from 'react-responsive';
import { RouteComponentProps, useLocation } from "react-router-dom";
import Icon from "../../Icon/Icon";
import Loading from '../../Loading/Loading';

import Intro from "../../Intro/Intro";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import Project1 from "../../../pages/Projects/Project1/Project1";
import Project2 from "../../../pages/Projects/Project2/Project2";

let _pProps: ProjectsProps;

interface ProjectProps {
  // projects?: typeof _pProps[];
}

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

const Project: React.FC<ProjectProps> = () => {
  
  // Gets current project
  const location = useLocation<LocationState>();
  const project = location.state.project || { from: { pathname: "/projects" } };
  const projects = location.state.projects;
  const active = location.state.active;

  let [hideProjectsMenu, setHideProjectsMenu] = useState(false);

  return (
    <div className={styles.project}>

      <div className={(hideProjectsMenu ? styles.projects__wrapper_hide : '')}>

        { project.id === 1 &&
          <Project1 project={project} projects={projects} />
        }

        { project.id === 2 &&
          <Project2 project={project} projects={projects} />
        }

      </div>
        
      {/* Projects Overview */}
      { projects && 
        <div className={`container ${styles.projects__wrapper} ${(hideProjectsMenu ? '' : styles.projects__wrapper_hide)}`}>
          <Intro page="projects" />
          <ProjectOverview projects={projects}></ProjectOverview>
        </div>
      }

      {/* Grid Icon */}
      { projects && 
        <div className={styles.project__gridview}>

          <Icon icon="projects" iconIndex={0} 
            currentProject={project.id}
            projectsNumber={projects.length}
            onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
            active={hideProjectsMenu}
          />

        </div>
      }

      {/* { error && <div>{ error }</div> } */}
      {/* { isPending && <Loading /> } */}

    </div>
  )
};

export default Project;
