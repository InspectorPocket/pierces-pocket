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
  
  const imgUrl: string = '/images/';
  
  return (
    <div className={styles.ProjectOverview}>
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id} className={styles.ProjectOverview__project}>
          <span className={styles.ProjectOverview__project__indicator}></span>
          <h5 className={styles.ProjectOverview__project__date}>{ project.date }</h5>
          <h2 className={styles.ProjectOverview__project__heading}>{ project.title }</h2>
          <div className={styles.ProjectOverview__project__img}>
            <img src={ (imgUrl + project.img) } />
          </div>
          <p>{ project.vocation }</p>
        </Link>
      ))}
    </div>
  );
  
}

export default ProjectOverview;
