import React from 'react';
import ProjectsProps from "../../props/projectsProps";
import styles from './Home.module.scss'

import NavItem from '../../components/NavBar/Navigation/NavItem/NavItem';
import Circles from '../../components/Circles/Circles';
import LineText from "../../components/Content/LineText/LineText";
import Email from "../../components/Content/Email/Email";
import Panels from '../../components/Panels/Panels';

interface HomeProps {
  setTransition: Function;
}

const Home: React.FC<ProjectsProps & HomeProps> = (setTransition) => {

  return (
    <div className={styles.Home}>
      <div className={styles.Home__nav}>
        {/* TODO make transition work here */}
        {/* <NavItem title="home" destination="" setTransition={setTransition} /> */}
        <NavItem title="projects" destination="projects" homePage={true} />
        <NavItem title="about" destination="about" homePage={true} />
        <NavItem title="extras" destination="extras" homePage={true} />
      </div>
      <Circles />
    </div>
    
  );
}

export default Home;
