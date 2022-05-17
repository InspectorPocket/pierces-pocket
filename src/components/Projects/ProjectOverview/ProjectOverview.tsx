import React from 'react';
import styles from './ProjectOverview.module.scss';
// import ProjectProps from "../../../pages/Home/Home";
import useFetch from "../../../hooks/useFetch";
import ProjectsProps from "../../../props/projectsProps";

let _pProps: ProjectsProps;

interface ProjectsOverviewProps {
  projects: typeof _pProps[];
  title?: string;
}

const ProjectOverview: React.FC<ProjectsOverviewProps> = ({ projects, title }) => {
  // const { error, isPending, data: projects } = useFetch('../../../assets/json/projects.json')
  console.log(projects);
  
  return (
    <div className={styles.ProjectOverview}>
      <h2>{ title }</h2>
      {projects.map(project => (
        <div className="project-preview" key={project.id} >
          <h2>{ project.title }</h2>
          <img src={ project.img } />
          <p>{ project.vocation }</p>
          {/* <button onClick={() => handleDelete(project.id)}>delete blog</button> */}
        </div>
      ))}
    </div>
  );
}

export default ProjectOverview;
