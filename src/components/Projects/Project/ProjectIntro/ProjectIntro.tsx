import React, { FC } from 'react';
import styles from './ProjectIntro.module.scss';
import ProjectProps from "../../../../props/projectsProps"


const ProjectIntro: FC<ProjectProps> = (project) => {

  const imgUrl: string = '/images/';

  return (
    <div className={styles.ProjectIntro}>
      <div className={styles.project__intro}>
        <div className={styles.project__img}>
          <span style={{backgroundImage: `url("${(imgUrl + project.img)}")`}} />
          {/* <img src={ (imgUrl + img) } /> */}
        </div>
        <div className={styles.project__title}>
          <h2 className={styles.project__title__heading}>{project.title}</h2>
          <h6 className={styles.project__title__vocation}>{project.vocation}</h6>
        </div>
      </div>
    </div>
  )
};

export default ProjectIntro;
