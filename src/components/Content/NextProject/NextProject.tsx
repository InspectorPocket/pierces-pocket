import React from 'react';
import styles from './NextProject.module.scss';
import { Link } from 'react-router-dom';
import ProjectsProps from '../../../props/projectsProps'

let _pProps: ProjectsProps;

interface NextProjectProps {
  projects?: typeof _pProps[];
  project: any;
  setNextProject: Function;
}

const NextProject: React.FC<NextProjectProps> = ({project, projects, setNextProject}) => {
  
  let nextProject: any;
  if (projects) nextProject = projects[project.index + 1];
  
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
          { projects && project.index < projects.length &&
            <h4>{projects[project.index + 1].title}</h4>
          }
          { projects && project.index === projects.length - 1 &&
            <h4>{projects[0].title}</h4>
          }
        </Link>
      }

    </div>
  )
};

export default NextProject;
