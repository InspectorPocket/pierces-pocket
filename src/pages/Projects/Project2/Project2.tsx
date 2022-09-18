import React, { useEffect, useState } from 'react';
import styles from './Project2.module.scss';

import ProjectIntro from '../../../components/Projects/Project/ProjectIntro/ProjectIntro';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

interface PiercesPocketProps {
  img: string;
  title: string;
  vocation: string;
}

const PiercesPocket: React.FC<PiercesPocketProps> = ({img, title, vocation}) => {

  let [slideIndex, setSlideIndex] = useState(1);
  let [totalSlides, setTotalSlides] = useState(0);

  return (
    <div className={styles.PiercesPocket}>
      
      {/* If swiper slide is 1 -> set logo to shrink -> else make full */}
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
          <ProjectIntro img={img} title={title} vocation={vocation} />
        </SwiperSlide>

        {/* Main Content Here */}
        <SwiperSlide>

          <div className={styles.project__main}>
            <h3>The Project</h3>
            
          </div>

        </SwiperSlide>

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
