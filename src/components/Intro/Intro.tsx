import React from 'react';
import styles from './Intro.module.scss';

interface IntroProps {
  page: string;
  scrollable?: boolean;
}

const Intro: React.FC<IntroProps> = ({page, scrollable}) => {

  return (
    <div className={styles.intro}>
      { page === 'home' &&
        <h1 className={`${styles.intro__heading}`}>Pierce<br/>Woods</h1>
      }
      { page === 'projects' &&
      <div className={`${styles.intro__heading}`}>
        <span className={`${styles.intro__subtext} ${styles.intro__subtext_left}`}>here</span>
        <span className={`${styles.intro__subtext} ${styles.intro__subtext_right}`}>are my</span>
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
