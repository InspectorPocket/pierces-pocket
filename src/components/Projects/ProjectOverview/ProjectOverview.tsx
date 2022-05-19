import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectOverview.module.scss';
// import ProjectProps from "../../../pages/Home/Home";
import useFetch from "../../../hooks/useFetch";
import ProjectsProps from "../../../props/projectsProps";

let _pProps: ProjectsProps;

interface ProjectsOverviewProps {
  projects: typeof _pProps[];
  title?: string;
}

const ProjectOverview: React.FC<ProjectsOverviewProps> = ({ projects }) => {
  
  return (
    <div className={styles.ProjectOverview}>
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id} className={styles.ProjectOverview__project}>
          <span className={styles.ProjectOverview__project__indicator}></span>
          <h5>{ project.date }</h5>
          <h2>{ project.title }</h2>
          <img src={ project.img } />
          <p>{ project.vocation }</p>
        </Link>
      ))}
    </div>
  );
  
}

export default ProjectOverview;
