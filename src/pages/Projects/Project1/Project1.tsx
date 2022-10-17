import React, { useEffect, useState } from 'react';
import styles from './Project1.module.scss';
import projectStyles from '../Projects.module.scss'
import ProjectsProps from "../../../props/projectsProps";

import '../../../sass/_layout/_mg_pd.scss';
import colours from "../../../sass/_foundation/_colours.module.scss";

import Circle from '../../../components/Circles/Circle/Circle';
import ProjectIntro from '../../../components/Projects/Project/ProjectIntro/ProjectIntro';
import Image from '../../../components/Content/Image/Image';
import LineText from '../../../components/Content/LineText/LineText';
import CardText from '../../../components/Content/CardText/CardText';
import NextProject from '../../../components/Content/NextProject/NextProject';
import { mainModule } from 'process';
import Panels from '../../../components/Panels/Panels';

let _pProps: ProjectsProps;

// TODO Shared props for all projects
interface ProjectProps {
  projects?: typeof _pProps[];
  project?: typeof _pProps;
  setNextProject: Function;
  setActiveProject: Function;
}

const PiercesPocket: React.FC<ProjectProps> = ({project, projects, setNextProject, setActiveProject}) => {

  const thisProjectId: number = 0;
  // TODO maybe make a fetch call to get the data on load?
  const thisProject: typeof project = projects![thisProjectId];
  // TODO pass from projects with set hardcoded id from each project (set id = 0)
  const imgUrl: string = `project${(thisProjectId + 1)}/`;
  const brand: any = {
    ai: true,
    xd: true,
    react: true
  }

  // TODO use media queries to set specific paddings for content
  let [padding, setPadding] = useState('0 5.5555vw');

  let [slideIndex, setSlideIndex] = useState(1);
  let [totalSlides, setTotalSlides] = useState(8);
  
  let [progressBar, setprogressBar] = useState(0);

  function percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
  } 

  const calculatePagination = () => {
    setprogressBar(percentage(thisProjectId + 1, projects!.length));
  }

  useEffect(() => {
    let cleanup = true;
    if (cleanup) {
      window.scrollTo({top: 0, left: 0, behavior: 'auto'});
      setActiveProject(thisProject);
      calculatePagination();
    }
    cleanup = false;
  }, []);

  return (
    <div className={projectStyles.project__wrapper}>

      <Panels state={'fixed'} />
      
      <ProjectIntro imgUrl={imgUrl} title={"Pierce's Pocket"} vocation={"Brand & UX Design, Front End Development"} brand={brand} />
      
      <div className={projectStyles.project}>

        {/* Main Content Here */}
        <div className={`${projectStyles.project__intro} mg-t-8 mg-b-8`}
          style={{paddingTop: '', paddingBottom: '20px', zIndex: 1}}>
          <Circle
            colour={colours.grey1}
            transform={'translateX(calc(-50% - 112px))'}
            top={'-52px'}
            width={'240vw'}
            height={'calc(130% + 104px)'}
          />
          <h3>The Project</h3>
          <LineText spacing={20} font='p' content='Welcome to Pierce’s Pocket! I designed and developed this website as a home for my work.' />
          <Image src={`${imgUrl}main.jpeg`} alt="" margin="mg-b-16" />
          <p>
            The style is minimal &amp; clean. The work I produce needs to be easily accessible, whilst being pleasant to look at.
            <br/>
            <br/>
            The name Pierce's Pocket ties into the idea of having a portfolio in a digital pocket! A mobile first design was ideal for the idea.
          </p>
        </div>

        <div className={projectStyles.project__dark_grey_circle}
          style={{paddingTop: '44px', paddingBottom: '72px', zIndex: 2}}>
          <Circle
            colour={colours.grey2}
            transform={'translateX(calc(-50% - 56px))'}
            width={'250vw'}
          />
          <h3 className='mg-b-20'>Logo</h3>
          <p className='mg-b-16'>
            When designing the logo I had two things in mind. I wanted it to look like it was cutout of the page, and that two "p's" were present - one inside the other.
          </p>
          <LineText spacing={16} font='h5' content='The design utilises the golden ratio.' />
          <Image src={`${imgUrl}main.jpeg`} alt="" margin="mg-b-16" />
        </div>

        <div className={`${projectStyles.project__light_grey_circle}`}
          style={{paddingTop: '40px', paddingBottom: '40px', zIndex: 1}}>
          <Circle
            colour={colours.grey1}
            transform={'translateX(-50%)'}
            width={'350vw'}
            height={'calc(100% + 60px)'}
            top={'-60px'}
          />
          <h3 className='mg-b-20'>Design</h3>
          <p className='mg-b-16 mg-r-64'>
            The style is simple but effective. Less is always more. I opted for a monochrome aesthetic, leaving space for images and slight accents to bring in the colours and adds the spice!
          </p>
          <CardText spacing={16} content='Creative freedom allowed for a less than conventional grid system. Whilst the traditional rules of spacing are applied, the grid follows the same layout as the panels in the background.' />
          <p className='mg-b-16 mg-r-64'>
            To add to the classy - clean - feel, I wanted a serif title with a smooth sans-serif body. 
          </p>
          <LineText spacing={20} font='h5' content='Playfair Display and Open Sans dance harmoniously together on a white canvas.' />
          <Image src={`${imgUrl}main.jpeg`} alt="" margin="mg-b-8" />
          <Image src={`${imgUrl}main.jpeg`} src2={`${imgUrl}main.jpeg`} alt="" margin="mg-b-8" />
          <Image src={`${imgUrl}main.jpeg`} alt="" margin="mg-b-8" />
          <Image src={`${imgUrl}main.jpeg`} src2={`${imgUrl}main.jpeg`} alt="" margin="mg-b-8" />
        </div>

        <div className={`${projectStyles.project__light_grey_circle} mg-t-32`}>
          <h3 className='mg-b-20'>Development</h3>
          <p className='mg-r-64 mg-b-16'>I developed the app with React and used Sass for the styling.</p>
          <CardText spacing={16} content="I had never used react before starting this project - however I was familiar with Angular - so it didn't take too long to get things moving." />
          <p className='mg-b-16'>You can view the code over on <a href="https://github.com/InspectorPocket/pierces-pocket">GitHub</a>.</p>
          <Image src="pierces_pocket.jpeg" alt="" margin="mg-b-16" />
        </div>

        <div className={`${projectStyles.project__outro}`}
          style={{paddingTop: '40px', paddingBottom: '32px', zIndex: 1}}>
          <Circle
            colour={colours.grey1}
            transform={'translateX(-50%)'}
            width={'200vw'}
            height={'150%'}
          />
          <p className=''>
            Pierce’s Pocket is a work in progress. I have plans to make it more interactive and make it more like a playground for my coding adventures!
            <br/><br/>
            But for now, feel free to check out the rest of the site.
          </p>
        </div>

        <div className={`${projectStyles.project__nextProject}`}>
          <NextProject project={thisProject} projects={projects} setNextProject={setNextProject} />

          {/* Pagination */}
          <div className={`${projectStyles.project__pagination}`}>
            <h6 className={`${projectStyles.project__pagination__number}`}>{thisProjectId + 1}</h6>
            <span className={`${projectStyles.project__pagination__bar}`}>
              <span style={{width: `${progressBar}%`}} />
            </span>
            <h6 className={`${projectStyles.project__pagination__number}`}>{projects!.length}</h6>
          </div>
        </div>

      </div>



      {/* TODO If swiper slide is 1 -> set logo to shrink -> else make full */}
      {/* DO this by passing updated slideIndex up to Logo */}
      {/* <Swiper
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
      > */}
      {/* </Swiper> */}

    </div>
  )
};

export default PiercesPocket;
