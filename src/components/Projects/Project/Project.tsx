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
  projects?: typeof _pProps[];
  id?: number;
}

interface LocationState {
  project: {
    id: number;
    title: string;
    vocation: string;
    img: string;
  }
}

const Project: React.FC<ProjectProps> = () => {

  const location = useLocation<LocationState>();
  const from = location.state.project || { from: { pathname: "/projects" } };

  const { error, isPending, data: projects } = useFetch('http://localhost:8020/projects');

  let [hideProjects, setHideProjects] = useState(true);

  return (
    <div className={styles.project}>

      <div className={(hideProjects ? '' : styles.projects__wrapper_hide)}>

        { from.id === 1 &&
          <Project1 img={from.img} title={from.title} vocation={from.vocation} />
        }

        { from.id === 2 &&
          <Project2 img={from.img} title={from.title} vocation={from.vocation} />
        }

      </div>
        
      {/* Projects Overview */}
      { projects && 
        <div className={`container ${styles.projects__wrapper} ${(hideProjects ? styles.projects__wrapper_hide : '')}`}>
          <Intro page="projects" />
          <ProjectOverview projects={projects}></ProjectOverview>
        </div>
      }

      {/* Grid Icon */}
      <div className={styles.project__gridview}>
        {/* Replace 2 with number of projects */}
        {/* styling={INSERT_OPEN/CLOSE_STATE of button} */}

          {/* means this icon can have a smooth transition into a close state (x) */}
          <Icon icon="projects" iconIndex={0} 
            // TODO set project number dynamically - query params? https://v5.reactrouter.com/web/example/query-parameters
            projectNumber={4}
            onClick={() => { setHideProjects(!hideProjects); }
          } />
      </div>

      { error && <div>{ error }</div> }
      {/* { isPending && <Loading /> } */}

    </div>
  )
};

export default Project;
