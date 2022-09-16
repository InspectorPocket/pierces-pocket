import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectOverview.module.scss';
// import ProjectProps from "../../../pages/Home/Home";
// import useFetch from "../../../hooks/useFetch";
import ProjectsProps from "../../../props/projectsProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import 'swiper/swiper-bundle.css';


let _pProps: ProjectsProps;

interface ProjectsOverviewProps {
  projects: typeof _pProps[];
  title?: string;
}

const ProjectOverview: React.FC<ProjectsOverviewProps> = ({ projects }) => {
  
  const imgUrl: string = '/images/';
  let slide1: Array<typeof Object> = [];
  let slide2: Array<typeof Object> = [];
  // let slideIndex: number = 1;
  let [slideIndex, setSlideIndex] = useState(1);
  let [totalSlides, setTotalSlides] = useState(0);

  projects.map(project => {
    // console.log(project);
    if (project.id === 1 || project.id === 2 || project.id === 3) {
      slide1.push(project);
    } 
    if (project.id === 4 || project.id === 5 || project.id === 6) {
      slide2.push(project);
    }
  })

  
  return (
    <div className={styles.ProjectOverview}>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        pagination={{
          type: "progressbar"
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideNextTransitionStart={() => {
          setSlideIndex(slideIndex = slideIndex + 1)
        }}
        onSlidePrevTransitionStart={() => {
          setSlideIndex(slideIndex = slideIndex - 1)
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        onSwiper={(swiper) => setTotalSlides(totalSlides = document.querySelectorAll(".swiper-slide").length)}
      >

        { slide1.length != 0 &&
          <SwiperSlide>

            {slide1.map(project => (

              <Link to={{
                  pathname: `/project/${project.id}`,
                  state: { project: project }
                }} key={project.id} className={styles.ProjectOverview__project}>

                <div className={styles.ProjectOverview__project__img}>
                  <img src={ (imgUrl + project.img) } />
                </div>

                <div className={styles.ProjectOverview__project__text}>
                  <h4 className={styles.ProjectOverview__project__text__heading}>{ project.title }</h4>
                  <h6 className={styles.ProjectOverview__project__text__vocation}>{ project.vocation }</h6>
                </div>

              </Link>

            ))}

          </SwiperSlide>
        }
        { slide2.length != 0 &&
          <SwiperSlide>
            
            {slide2.map(project => (

              <Link to={{
                  pathname: `/project/${project.id}`,
                  state: { project: project }
                }} key={project.id} className={styles.ProjectOverview__project}>

                <div className={styles.ProjectOverview__project__img}>
                  <img src={ (imgUrl + project.img) } />
                </div>

                <div className={styles.ProjectOverview__project__text}>
                  <h4 className={styles.ProjectOverview__project__text__heading}>{ project.title }</h4>
                  <h6 className={styles.ProjectOverview__project__text__vocation}>{ project.vocation }</h6>
                </div>

              </Link>

            ))}

          </SwiperSlide>
        }
        { totalSlides > 1 &&
          <div className='swiper-pagination swiper-pagination-numbers'>
            <h6 className='swiper-pagination-number swiper-pagination-number-count'>{slideIndex}</h6>
            <h6 className='swiper-pagination-number swiper-pagination-number-total'>{totalSlides}</h6>
          </div>
        }
      </Swiper>
    </div>
  );
  
}

export default ProjectOverview;
