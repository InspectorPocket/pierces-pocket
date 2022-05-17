import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";
import useFetch from "../../hooks/useFetch";
import ProjectsProps from "../../props/projectsProps";
import Intro from '../../components/Intro/Intro';

// npx generate-react-cli component MyComponent

const Home: React.FC<ProjectsProps> = () => {

  const { error, isPending, data: projects } = useFetch('http://localhost:8000/projects');

  {/* <div className={columns.col}></div>
    <div className={columns.col}></div>
    <div className={columns.col}></div>
    <div className={columns.col}></div>
    <div className={columns.col}></div> */}

  return (
    <div className={styles.home}>
      {/* <Intro /> */}
      <div>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { projects && <ProjectOverview projects={projects} title="projects" /> }
      </div>
    </div>
  );
}

export default Home;
