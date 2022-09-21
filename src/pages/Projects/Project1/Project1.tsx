import React, { useEffect, useState } from 'react';
import styles from './Project1.module.scss';
import ProjectsProps from "../../../props/projectsProps";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '../../../sass/_layout/_mg_pd.scss';

import ProjectIntro from '../../../components/Projects/Project/ProjectIntro/ProjectIntro';
import LineText from '../../../components/Content/LineText/LineText';
import CardText from '../../../components/Content/CardText/CardText';
import NextProject from '../../../components/Content/NextProject/NextProject';

let _pProps: ProjectsProps;

interface ProjectProps {
  projects?: typeof _pProps[];
  project: typeof _pProps;
}

const PiercesPocket: React.FC<ProjectProps> = ({project, projects}) => {

  let [slideIndex, setSlideIndex] = useState(1);
  let [totalSlides, setTotalSlides] = useState(0);

  return (
    <div className={styles.Project1}>
      
      {/* TODO If swiper slide is 1 -> set logo to shrink -> else make full */}
      {/* DO this by passing updated slideIndex up to Logo */}
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`mySwiper mySwiperProject ${styles.mySwiper}`}
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
          <ProjectIntro img={project.img} title={project.title} vocation={project.vocation} />
        </SwiperSlide>


        {/* Main Content Here */}
        <SwiperSlide>

          <div className={styles.project__slide}>
            <h3>The Project</h3>
            <LineText spacing={20} font='p' content='Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work.' />
            <img className='mg-b-16' src="/images/clear_uk.jpeg" alt="" />
            <p>
              The style is minimal &amp; clean. The work I produce needs to be easily accessible, whilst being pleasant to look at.
              <br/>
              The name Pierce's Pocket ties into the idea of having a portfolio in a digital pocket! A mobile first design was ideal for the idea.
            </p>
          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className={styles.project__slide}>
            <h3 className='mg-b-20'>Logo</h3>
            <p className='mg-b-16'>
              When designing the logo I had two things in mind. I wanted it to look like it was cutout of the page, and that two "p's" were present - one inside the other.
            </p>
            <LineText spacing={16} font='h5' content='The design utilises the golden ratio.' />
            <img className='mg-b-16' src="/images/fluid_ads.jpeg" alt="" />
          </div>

        </SwiperSlide>
        
        <SwiperSlide>

          <div className={styles.project__slide}>
            <h3 className='mg-b-20'>Design</h3>
            <p className='mg-b-16 mg-r-64'>
              The style is simple but effective. Less is always more. I opted for a monochrome aesthetic, leaving space for images to bring in the colours that adds the spice!
            </p>
            {/* <CardText spacing={16} content='Playfair Display and Open Sans dance beautifully together on a white canvas.' /> */}
            <img src="/images/fluid_ads.jpeg" alt="" />
            <LineText spacing={16} font='h5' content='Playfair Display and Open Sans dance harmoniously together on a white canvas.' />
            {/* <LineText spacing={16} font='h5' content='Make things as simple as possible but no simpler.' /> */}
            {/* styleguide picture */}
          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className={styles.project__slide}>
            {/* <h3 className='mg-b-20'>Design</h3> */}
            <img className='mg-b-16' src="/images/fluid_ads.jpeg" alt="" />
            <p className='mg-b-16'>
              Creative freedom allowed for a less than conventional grid system. Whilst the traditional rules of spacing are applied, the grid follows the same layout as the panels in the background.
            </p>
            {/* <CardText spacing={16} content='Creative freedom allowed for a less than conventional grid system. Whilst the traditional rules of spacing are applied, the grid follows the same layout as the panels in the background.' /> */}
          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className={styles.project__slide}>
            <h3 className='mg-b-20'>Development</h3>
            <p className='mg-r-64 mg-b-16'>I developed the app with React and used Sass for the styling.</p>
            <CardText spacing={16} content="I had never used react before starting this project - however I was familiar with Angular - so it didn't take too long to get things moving." />
            <p className='mg-b-16'>You can view the code over on <a href="https://github.com/InspectorPocket/pierces-pocket">GitHub</a>.</p>
            <img src="/images/pierces_pocket.jpeg" alt="" />
          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className={styles.project__slide}>
            <img src="/images/fluid_ads.jpeg" alt="" />
            <img src="/images/fluid_ads.jpeg" alt="" />
            <img src="/images/fluid_ads.jpeg" alt="" />
          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className={styles.project__slide}>
            <h3 className='mg-b-20'>Future Plans</h3>
            <p className='mg-r-64 mg-b-16'>I developed the app with React and used Sass for the styling.</p>
            <p className='mg-b-16'>You can view the code over on <a href="https://github.com/InspectorPocket/pierces-pocket">GitHub</a>.</p>
            <NextProject project={project} projects={projects} />
          </div>

        </SwiperSlide>


        {/* Pagination */}
        { totalSlides > 1 &&
          <div className='swiper-pagination swiper-pagination-numbers'>
            <h6 className='swiper-pagination-number swiper-pagination-number-count'>{slideIndex}</h6>
            <h6 className='swiper-pagination-number swiper-pagination-number-total'>{totalSlides}</h6>
          </div>
        }

      </Swiper>

    </div>
  )
};

export default PiercesPocket;
