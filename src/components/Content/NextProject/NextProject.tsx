import React, { useState } from 'react';
import styles from './NextProject.module.scss';
import { Link } from 'react-router-dom';
import ProjectsProps from '../../../props/projectsProps'

import panelWidth from '../../../sass/_foundation/_panelWidth.module.scss';

let _pProps: ProjectsProps;

interface NextProjectProps {
  projects?: typeof _pProps[];
  project: any;
  setNextProject: Function;
}

const NextProject: React.FC<NextProjectProps> = ({project, projects, setNextProject}) => {
  
  let nextProject: any;
  if (projects && project) nextProject = project.index === projects.length - 1 ? projects[0] : projects[project.index + 1];
  
  return (
    <div className={styles.NextProject}>

      { projects && project &&
        <Link to={{
            pathname: `/projects/${nextProject.id}`}}
            state={{ project: project, projects: projects }}
            key={project.index === projects.length - 1 ? 0 : project.index + 1}
            onClick={() => {
              setNextProject(nextProject)
          }}>
          <h6>Next Project</h6>
          <h3>{nextProject.title}</h3>
          <div className={panelWidth.panelHeight}></div>
        </Link>
      }

    </div>
  )
};

export default NextProject;
