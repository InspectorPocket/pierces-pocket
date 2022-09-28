import React from 'react';
import ProjectsProps from "../../props/projectsProps";
import Intro from '../../components/Intro/Intro';

import intro from '../../components/Intro/Intro.module.scss';
import Circles from '../../components/Circles/Circles';
import LineText from "../../components/Content/LineText/LineText";
import Email from "../../components/Content/Email/Email";
import Panels from '../../components/Panels/Panels';

const Home: React.FC<ProjectsProps> = () => {

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
