import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ProjectProps from "../../../pages/Home/Home";
// import useFetch from "../../../hooks/useFetch";
import ProjectsProps from "../../../props/projectsProps";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import styles from './ProjectOverview.module.scss';
import Intro from '../../Intro/Intro'


let _pProps: ProjectsProps;

interface ProjectsOverviewProps {
  projects: typeof _pProps[];
  setActiveProject: Function;
}

const ProjectOverview: React.FC<ProjectsOverviewProps> = ({ projects, setActiveProject }) => {
  
  const loadedProjects: Array<any> = projects;

  const imgUrl: string = '/images/project';
  // let slide1: Array<any> = [];
  // let slide2: Array<any> = [];
  // let slide3: Array<any> = [];

  // let [slideIndex, setSlideIndex] = useState(1);
  // let [totalSlides, setTotalSlides] = useState(0);
  let [activeState, setActiveState] = useState(false);

  // projects.map(project => {
  //   loadedProjects.push(project);
  // })


  return (
    <div className={styles.ProjectOverview__wrapper}>
      <Intro page="projects"></Intro>
      <div className={styles.ProjectOverview}>

        {/* TODO Lazy load images? */}

        { projects && loadedProjects.map(project => (

          <Link to={{
            pathname: `/projects/${project.title.toLowerCase().split(' ').join('-')}`,
            state: { project: project, projects: projects }
          }}
            key={project.id} className={styles.ProjectOverview__project}
            onClick={() => {
              setActiveState(!activeState);
              setActiveProject(project)
          }}>

          <div className={styles.ProjectOverview__project__img}>
            <img src={ (imgUrl + (project.id + 1) + '/' + project.img) } />
          </div>

          <div className={styles.ProjectOverview__project__text}>
            <h4 className={styles.ProjectOverview__project__text__heading}>{ project.title }</h4>
            <div className={styles.ProjectOverview__project__text__vocation}>
              <div className={styles.ProjectOverview__project__text__vocation__bar}>
                <span style={{backgroundColor: project.colour}}></span>
              </div>
              <h6>
                { project.ux ? "UX" : "" }
                { project.ux && project.dev || project.ux && project.brand ? " / " : "" }
                { project.dev ? "Dev" : "" }
                { project.dev && project.brand ? " / " : "" }
                { project.brand ? "Brand" : "" }
              </h6>
            </div>
            <div className={styles.ProjectOverview__project__logo}>
              <img className={styles.ProjectOverview__project__logo__outline} src={ (imgUrl + (project.id + 1) + '/logo_outline.svg') } />
              <img className={styles.ProjectOverview__project__logo__full} src={ (imgUrl + (project.id + 1) + '/logo.svg') } />
            </div>
          </div>

          </Link>

        ))}

      </div>
    </div>
  );
  
}

export default ProjectOverview;
