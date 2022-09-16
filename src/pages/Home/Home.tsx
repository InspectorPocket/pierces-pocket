import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import ProjectOverview from "../../components/Projects/ProjectOverview/ProjectOverview";
import useFetch from "../../hooks/useFetch";
import ProjectsProps from "../../props/projectsProps";
import Intro from '../../components/Intro/Intro';

import intro from '../../components/Intro/Intro.module.scss';
import Circles from '../../components/Circles/Circles';
import LineText from "../../components/Content/LineText/LineText";
import Email from "../../components/Content/Email/Email";

const Home: React.FC<ProjectsProps> = () => {

  {/* <div className={columns.col}></div>
    <div className={columns.col}></div>
    <div className={columns.col}></div>
    <div className={columns.col}></div>
    <div className={columns.col}></div> */}

  return (
    <div className={`${intro.intro}`}>
      <div>
        <Intro page="home" />
        <LineText
          font='p'
          content='UX/UI &amp; Brand Designer. Expanded into a Front End Developer. Now married all skills to become a Design Engineer.'
        />
        <Email point={true} topSpace={true} />
      </div>
      <Circles />
    </div>
  );
}

export default Home;
