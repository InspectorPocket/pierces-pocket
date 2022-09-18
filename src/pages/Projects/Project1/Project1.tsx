import React, { useEffect, useState } from 'react';
import styles from './Project1.module.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '../../../sass/_layout/_mg_pd.scss';

import ProjectIntro from '../../../components/Projects/Project/ProjectIntro/ProjectIntro';
import LineText from '../../../components/Content/LineText/LineText';
import CardText from '../../../components/Content/CardText/CardText';

interface PiercesPocketProps {
  img: string;
  title: string;
  vocation: string;
}

const PiercesPocket: React.FC<PiercesPocketProps> = ({img, title, vocation}) => {

  let [slideIndex, setSlideIndex] = useState(1);
  let [totalSlides, setTotalSlides] = useState(0);

  return (
    <div className={styles.Project1}>
      
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
            <LineText spacing={20} font='p' content='Pierce’s Pocket is a project to allow me to host my works in a clean and elegant way.' />
            <img className='mg-b-16' src="/images/clear_uk.jpeg" alt="" />
            <p>The style is simple but elegant with LV monogram being recognizable all over the world. But it’s the combination of quality, exclusivity and innovation that make the timeless success.</p>
          </div>

        </SwiperSlide>
        
        <SwiperSlide>

          <div className={styles.project__main}>
            <h3 className='mg-b-20'>Planning</h3>
            <p>The style is simple but elegant with LV monogram being recognizable all over the world. But it’s the combination of quality, exclusivity and innovation that make the timeless success.</p>
            <LineText spacing={16} font='h5' content='Pierce’s Pocket is a project to allow me to host my works in a clean and elegant way.' />
            <img src="/images/fluid_ads.jpeg" alt="" />
          </div>

        </SwiperSlide>

        <SwiperSlide>

          <div className={styles.project__main}>
            <h3 className='mg-b-20'>Design</h3>
            <p className='mg-r-64 mg-b-16'>The style is simple but elegant with LV monogram being recognizable all over the world. But it’s the combination of quality, exclusivity. And some more of course.</p>
            <CardText spacing={16} content='The style is simple but elegant with LV monogram being recognizable all over the world. But it’s the combination.' />
            <img src="/images/pierces_pocket.jpeg" alt="" />
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
