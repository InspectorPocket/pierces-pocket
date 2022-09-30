import React, { FC } from 'react';
import styles from './About.module.scss';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className={styles.About}>
    {/* <div>
        <Intro page="about" />
        <LineText
          font='p'
          content='UX/UI &amp; Brand Designer. Expanded into a Front End Developer. Now married all skills to become a Design Engineer.'
        />
        <Email point={true} topSpace={true} />
      </div> */}
  </div>
);

export default About;
