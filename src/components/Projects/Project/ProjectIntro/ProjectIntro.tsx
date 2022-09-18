import React, { FC } from 'react';
import styles from './ProjectIntro.module.scss';

interface ProjectIntroProps {
  img: string;
  title: string;
  vocation: string;
}

const ProjectIntro: FC<ProjectIntroProps> = ({img, title, vocation}) => {

  const imgUrl: string = '/images/';

  return (
    <div className={styles.ProjectIntro}>
      <div className={styles.project__intro}>
        <div className={styles.project__img}>
          <span style={{backgroundImage: `url("${(imgUrl + img)}")`}} />
          {/* <img src={ (imgUrl + img) } /> */}
        </div>
        <div className={styles.project__title}>
          <h2 className={styles.project__title__heading}>{title}</h2>
          <h6 className={styles.project__title__vocation}>{vocation}</h6>
        </div>
      </div>
    </div>
  )
};

export default ProjectIntro;
