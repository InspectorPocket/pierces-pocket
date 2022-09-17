import React, { useEffect, useState } from 'react';
import useFetch from "../../../hooks/useFetch";
// import { Link } from 'react-router-dom';
import styles from './Project.module.scss';
// import helpers from '../../../sass/_abstracts/_helpers.module.scss';
import ProjectsProps from "../../../props/projectsProps";
// import MediaQuery from 'react-responsive';
import { RouteComponentProps, useLocation } from "react-router-dom";
import Icon from "../../Icon/Icon";
import Intro from "../../Intro/Intro";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

let _pProps: ProjectsProps;

interface ProjectProps {
  projects?: typeof _pProps[];
  id?: number;
  title?: string;
}

interface LocationState {
  project: {
    id: number;
    title: string;
    vocation: string;
    img: string;
    body: string;
  }
}

const Project: React.FC<ProjectProps> = () => {
  
  const imgUrl: string = '/images/';

  const location = useLocation<LocationState>();
  const from = location.state.project || { from: { pathname: "/projects" } };

  let [slideIndex, setSlideIndex] = useState(1);
  let [totalSlides, setTotalSlides] = useState(0);

  const { error, isPending, data: projects } = useFetch('http://localhost:8020/projects');

  let [projectNumber, setProjectNumber] = useState(4);
  let [hideProjects, setHideProjects] = useState(true);

  // if (projects) {
  //   setProjectNumber(projects.length);
  // }

  // Remove height upon load
  function addHeight() {
    
  }

  return (
    <div className={styles.project}>
      {/* If swiper slide is 1 -> set logo to shrink -> else make full */}
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        pagination={{
          type: "progressbar"
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper mySwiperProject ${styles.mySwiper} ${(hideProjects ? '' : styles.projects__wrapper_hide)}`}
        onSlideNextTransitionStart={() => {
          setSlideIndex(slideIndex = slideIndex + 1)
        }}
        onSlidePrevTransitionStart={() => {
          setSlideIndex(slideIndex = slideIndex - 1)
        }}
        onSwiper={() => {
          const swiperEl: any = document.querySelector(".mySwiperProject");
          setTotalSlides(totalSlides = swiperEl.querySelectorAll(".swiper-slide").length)
        }}
      >

        <SwiperSlide>

          <div className={styles.project__intro}>
            <div className={styles.project__img}>
              <span style={{backgroundImage: `url("${(imgUrl + from.img)}")`}} />
              {/* <img src={ (imgUrl + from.img) } /> */}
            </div>
            <div className={styles.project__title}>
              <h2 className={styles.project__title__heading}>{from.title}</h2>
              <h6 className={styles.project__title__vocation}>{from.vocation}</h6>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className={styles.project__main}>
            {/* from body to fill slide 1 */}
            {from.body}
          </div>

        </SwiperSlide>

        { totalSlides > 1 &&
          <div className='swiper-pagination swiper-pagination-numbers'>
            <h6 className='swiper-pagination-number swiper-pagination-number-count'>{slideIndex}</h6>
            <h6 className='swiper-pagination-number swiper-pagination-number-total'>{totalSlides}</h6>
          </div>
        }

      </Swiper>
        
      { projects && 
        <div className={`container ${styles.projects__wrapper} ${(hideProjects ? styles.projects__wrapper_hide : '')}`}>
          <Intro page="projects" />
          <ProjectOverview projects={projects}></ProjectOverview>
        </div>
      }

      <div className={styles.project__gridview}>
        {/* Replace 2 with number of projects */}
        {/* styling={INSERT_OPEN/CLOSE_STATE of button} */}

          {/* means this icon can have a smooth transition into a close state (x) */}
          <Icon icon="projects" iconIndex={0} 
            // TODO set project number dynamically - query params? https://v5.reactrouter.com/web/example/query-parameters
            projectNumber={4}
            onClick={() => { setHideProjects(!hideProjects); }
          } />
        {/* </Link> */}
      </div>

    </div>
  )
};

export default Project;
