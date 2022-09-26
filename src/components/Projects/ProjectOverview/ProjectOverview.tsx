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

  const imgUrl: string = '/images/';
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
    <div className={styles.ProjectOverview}>

      <Intro page="projects"></Intro>

      {/* <Swiper
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper mySwiperProjectOverview ${styles.mySwiper}`}
        onSlideNextTransitionStart={() => {
          setSlideIndex(slideIndex = slideIndex + 1)
        }}
        onSlidePrevTransitionStart={() => {
          setSlideIndex(slideIndex = slideIndex - 1)
        }}
        onSwiper={() => {
          const swiperEl: any = document.querySelector(".mySwiperProjectOverview");
          setTotalSlides(totalSlides = swiperEl.querySelectorAll(".swiper-slide").length)
        }}
      > */}
        {/* TODO Lazy load images? */}
        {/* TOTO Make coontainer local to components so the slider will go off screen for mobile */}

        { projects && loadedProjects.map(project => (

          <Link to={{
            pathname: `/projects/${project.title.toLowerCase().split(' ').join('-')}`,
            state: { project: project, projects: projects }
          }}
            key={project.id} className={styles.ProjectOverview__project}
            onClick={(e) => {
              setActiveState(!activeState);
              // pass active project up to projects component
              setActiveProject(project)
          }}>

          <div className={styles.ProjectOverview__project__img}>
            <img src={ (imgUrl + project.img) } />
          </div>

          <div className={styles.ProjectOverview__project__text}>
            <h4 className={styles.ProjectOverview__project__text__heading}>{ project.title }</h4>
            <h6 className={styles.ProjectOverview__project__text__vocation}>{ project.vocation }</h6>
          </div>

          </Link>

        ))}
        
        {/* { totalSlides > 1 &&
          <div className='swiper-pagination swiper-pagination-numbers'>
            <h6 className='swiper-pagination-number swiper-pagination-number-count'>{slideIndex}</h6>
            <h6 className='swiper-pagination-number swiper-pagination-number-total'>{totalSlides}</h6>
          </div>
        } */}
      {/* </Swiper> */}
    </div>
  );
  
}

export default ProjectOverview;
