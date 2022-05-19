import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";
import useFetch from "../../hooks/useFetch";
import ProjectsProps from "../../props/projectsProps";
import Intro from '../../components/Intro/Intro';

const Projects: React.FC<ProjectsProps> = () => {
  const { error, isPending, data: projects } = useFetch('http://localhost:8000/projects');

  return (
    <div className={styles.projects}>
      <Intro page="projects" scrollable={true} />
      <div className={styles.projectsPreview}>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { projects && <ProjectOverview projects={projects} /> }
      </div>
      <a href="#">
        <p className="mg-t-16 mg-b-16">back to top</p>
      </a>
    </div>
  );
};

export default Projects;
