import React from 'react';
import Email from '../../components/Content/Email/Email';
import LineText from '../../components/Content/LineText/LineText';
import Intro from '../../components/Intro/Intro';
import Panels from '../../components/Panels/Panels';
import Circles from '../../components/Circles/Circles';

import styles from './About.module.scss';
import panelWidth from '../../sass/_foundation/_panelWidth.module.scss'

interface AboutProps {}

const About: React.FC<AboutProps> = () => (
  <div className={styles.About}>
    <Panels state={'home'} bg={true} />
    <div className={styles.About__content__wrapper}>
      <Intro page="about" />
      <div className={styles.About__content}>
        <span className={panelWidth.panelWidth} />
        <div className={`${styles.About__text} ${panelWidth.panelPadding_right}`}>
          <LineText
            font='p'
            spacing={false}
            content={`Hey how’s it going?
            
            I’m a UX/UI & Brand Designer based in the UK. I expanded as a Front End Developer so I could not only create designs, but make them come to life!

            I like to develop projects from scratch so I have full creative control - but I have plenty of experience hopping onto pre-existing projects.

            My journey into the digital world of creation started with 2D animation. I then moved into 3D design and game development.

            Marrying these cross-disciplinary skills together created a broad knowledge of the industry at large, and allows for a supervised approach to my work.

            Feel free to reach out! `}
          />
          <Email point={true} topSpace={true} />
        </div>
        <span className={panelWidth.panelWidth} />
      </div>
    </div>
    <div className={styles.About__circles}>
      <Circles />
    </div>
  </div>
);

export default About;
