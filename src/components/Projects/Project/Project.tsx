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
          <h1 className={styles.project__title__heading}>{from.title}</h1>
          <p className={styles.project__title__vocation}>{from.vocation}</p>
          <div className={`${styles.project__title__panels} ${styles.project__title__panels_4}`}>
          {/* <div className={`${styles.project__title__panels} ${styles.project__title__panels_4} ${helpers.h_0_c}`}> */}
            <Panel height={50}/>
            <Panel/>
            {/* 5 */}
            <MediaQuery minWidth={320}>
              <Panel/>
            </MediaQuery>
            {/* 6 */}
            <MediaQuery minWidth={460}>
              <Panel/>
            </MediaQuery>
            {/* 7 */}
            <MediaQuery minWidth={620}>
              <Panel/>
            </MediaQuery>
            {/* 8 */}
            <MediaQuery minWidth={728}>
              <Panel/>
            </MediaQuery>
            {/* 9 / 10 */}
            <MediaQuery minWidth={880} maxWidth={1024}>
              <Panel/>
            </MediaQuery>
            {/* 11 */}
            <MediaQuery minWidth={1140}>
              <Panel/>
            </MediaQuery>
            {/* 12 */}
            <MediaQuery minWidth={1280}>
              <Panel/>
            </MediaQuery>
            {/* 13 */}
            <MediaQuery minWidth={1336}>
              <Panel/>
            </MediaQuery>
            {/* 14 */}
            <MediaQuery minWidth={1440}>
              <Panel/>
            </MediaQuery>
            {/* 15 */}
            <MediaQuery minWidth={1700}>
              <Panel/>
            </MediaQuery>
            {/* 16 */}
            <MediaQuery minWidth={1920}>
              <Panel/>
            </MediaQuery>
            {/* 17/18 */}
            <MediaQuery minWidth={2100}>
              <Panel/>
              <Panel/>
            </MediaQuery>
            {/* 19/20 */}
            <MediaQuery minWidth={2400}>
              <Panel/>
              <Panel/>
            </MediaQuery>
            {/* 21/22 */}
            <MediaQuery minWidth={2800}>
              <Panel/>
              <Panel/>
            </MediaQuery>
            {/* 23/24 */}
            <MediaQuery minWidth={3400}>
              <Panel/>
              <Panel/>
            </MediaQuery>
          </div>
        </div>
        <p className={intro.scroll}>scroll</p>
      </div>
      <div className={styles.project__main}>
        
      </div>
    </div>
  )
};

export default Project;
