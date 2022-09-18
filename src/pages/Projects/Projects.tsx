import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import styles from './Projects.module.scss';

import ProjectsProps from "../../props/projectsProps";

import Intro from '../../components/Intro/Intro';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";

const Projects: React.FC<ProjectsProps> = () => {

  // TODO Can I put Project data here isntead of making a call?
  const { error, isPending, data: projects } = useFetch('http://localhost:8020/projects');

  const urlId = useParams();

  return (
    <div className={styles.projects}>

      {/* Projects */}
      { projects && <Intro page="projects" /> }
      { projects && <ProjectOverview projects={projects} /> }

      { error && <div>{ error }</div> }
      {/* TODO Replace with a loading component */}
      { isPending && <div>Loading...</div> }

    </div>
  );
};

export default Projects;
