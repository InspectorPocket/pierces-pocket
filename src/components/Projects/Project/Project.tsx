import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Project.module.scss';
import helpers from '../../../sass/_abstracts/_helpers.module.scss';
import ProjectsProps from "../../../props/projectsProps";
import MediaQuery from 'react-responsive';
import { RouteComponentProps, useLocation } from "react-router-dom";
import Icon from "../../Icon/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import 'swiper/swiper-bundle.css';

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
        className={`mySwiper ${styles.mySwiper}`}
        onSlideNextTransitionStart={() => {
          setSlideIndex(slideIndex = slideIndex + 1)
        }}
        onSlidePrevTransitionStart={() => {
          setSlideIndex(slideIndex = slideIndex - 1)
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        onSwiper={() => setTotalSlides(totalSlides = document.querySelectorAll(".swiper-slide").length)}
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

        <div className={styles.project__gridview}>
          {/* Replace 2 with number of projects */}
          {/* styling={INSERT_OPEN/CLOSE_STATE of button} */}
          <Link to={{
            pathname: `/projects`
          }} style={{display: 'flex'}}>

          {/* <Link to={{
            pathname: `/project/${project.id}`,
                  state: { project: project }
                }} key={project.id} className={styles.ProjectOverview__project}> */}

            {/* instead of linking to project - display the projects component on top? */}
            {/* I can pass through the project id from here then from.id - worst case from query */}
            {/* may have to temperarily hide pagination from this page whilst showing the projects one */}
            {/* means this icon can have a smooth transition into a close state (x) */}
            <Icon icon="projects" iconIndex={0} projectNumber={2} onClick={() => {}} />
          </Link>
        </div>

      </Swiper>

    </div>
  )
};

export default Project;
