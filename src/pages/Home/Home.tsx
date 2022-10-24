import React from 'react';
import ProjectsProps from "../../props/projectsProps";
import styles from './Home.module.scss'

import NavItem from '../../components/NavBar/Navigation/NavItem/NavItem';
import Circles from '../../components/Circles/Circles';
import Panels from '../../components/Panels/Panels';

interface HomeProps {
  setTransition: Function;
}

const Home: React.FC<ProjectsProps & HomeProps> = ({setTransition}) => {

  return (
    <div className={styles.Home}>
      <Panels state={'home'} bg={true} />
      <div className={styles.Home__nav}>
        {/* TODO make transition work here */}
        {/* <NavItem title="home" destination="" setTransition={setTransition} /> */}
        <NavItem title="projects" destination="projects" homePage={true} setTransition={setTransition} />
        <NavItem title="about" destination="about" homePage={true} setTransition={setTransition} />
        <NavItem title="extras" destination="extras" homePage={true} setTransition={setTransition} />
      </div>
      <Circles />
    </div>
  );
}

export default Home;
