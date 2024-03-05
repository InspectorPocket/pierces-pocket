import React from 'react';

import styles from './Intro.module.scss';
import panelWidth from '../../sass/_foundation/_panelWidth.module.scss'

interface IntroProps {
  page: string;
  scrollable?: boolean;
}

const Intro: React.FC<IntroProps> = ({page, scrollable}) => {

  return (
    <div className={`${styles.intro} ${page === 'about' ? styles.intro__about : ''}`}>
      { page === 'about' &&
      <div className={`${styles.intro__heading} ${styles.intro__about__heading} ${panelWidth.panelPadding_left}`}>
        <h1>Pierce Woods</h1>
      </div>
      }
      { page === 'projects' &&
      <div className={`${styles.intro__heading}`}>
        {/* <span className={`${styles.intro__subtext} ${styles.intro__subtext_left}`}>here</span>
        <span className={`${styles.intro__subtext} ${styles.intro__subtext_right}`}>are my</span> */}
        <h1>Projects</h1>
      </div>
      }
      { page === 'extras' &&
        <h1 className={`${styles.intro__heading}`}>Extras</h1>
      }
    </div>
  )
};

export default Intro;
