import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";
import useFetch from "../../hooks/useFetch";
import ProjectsProps from "../../props/projectsProps";
import Intro from '../../components/Intro/Intro';

import intro from '../../components/Intro/Intro.module.scss';

const Home: React.FC<ProjectsProps> = () => {

  {/* <div className={columns.col}></div>
    <div className={columns.col}></div>
    <div className={columns.col}></div>
    <div className={columns.col}></div>
    <div className={columns.col}></div> */}

  return (
    <div className={`${styles.home} ${intro.intro}`}>
      <div className={'piercespocket_heading'}>
        <Link to={`/projects`} >GO TO PROJECTS</Link>
      </div>
    </div>
  );
}

export default Home;
