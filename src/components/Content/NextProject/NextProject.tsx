import React from 'react';
import styles from './NextProject.module.scss';
import { Link } from 'react-router-dom';
import ProjectsProps from '../../../props/projectsProps'

let _pProps: ProjectsProps;

interface NextProjectProps {
  projects?: typeof _pProps[];
  project?: any;
}

const NextProject: React.FC<NextProjectProps> = ({project, projects}) => {
  
  let nextProject: any;
  if (projects) nextProject = projects[project.id + 1];
  
  return (
    <div className={styles.NextProject}>

      { projects && project &&
        <Link to={{
            pathname: `/project/${nextProject.title.toLowerCase().split(' ').join('-')}`,
            state: {}
          }} key={project.id === projects.length - 1 ? 0 : project.id + 1}
        >
          <h6>Next Project</h6>
          { projects && project.id < projects.length &&
            <h4>{projects[project.id + 1].title}</h4>
          }
          { projects && project.id === projects.length - 1 &&
            <h4>{projects[0].title}</h4>
          }
        </Link>
      }

    </div>
  )
};

export default NextProject;
