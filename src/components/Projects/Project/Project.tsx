import React from 'react';
import styles from './Project.module.scss';
import helpers from '../../../sass/_abstracts/_helpers.module.scss';
import ProjectsProps from "../../../props/projectsProps";
import MediaQuery from 'react-responsive';
import { RouteComponentProps, useLocation } from "react-router-dom";
import intro from '../../Intro/Intro.module.scss';
import Panel from '../../Panels/Panel/Panel';
// import panel from '../../Panels/Panel/Panel.module.scss';

let _pProps: ProjectsProps;

interface ProjectProps {
  projects?: typeof _pProps[];
  id?: number;
  title?: string;
}

interface LocationState {
  project: {
    body: string;
    date: string;
    panels: number;
    id: number;
    img: string;
    title: string;
    vocation: string;
  }
}

const Project: React.FC<ProjectProps> = () => {
  
  const imgUrl: string = '/images/';

  const location = useLocation<LocationState>();
  const from = location.state.project || { from: { pathname: "/projects" } };

  // Remove height upon load
  function addHeight() {
    
  }

  return (
    <div className={styles.project}>
      <div className={styles.project__intro}>
        <div className={styles.project__img}>
          <span style={{backgroundImage: `url("${(imgUrl + from.img)}")`}} />
          {/* <img src={ (imgUrl + from.img) } /> */}
        </div>
        <div className={styles.project__title}>
          <h2 className={styles.project__title__heading}>{from.title}</h2>
          <h6 className={styles.project__title__vocation}>{from.vocation}</h6>
        </div>
        <div className={styles.project__arrow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.project__main}>
        
      </div>
    </div>
  )
};

export default Project;
