import React, { useEffect, useState } from 'react';
import ProjectProps from "../../../props/projectsProps"

import styles from './ProjectIntro.module.scss';
import panelWidth from '../../../sass/_foundation/_panelWidth.module.scss';

import Icon from '../../Icon/Icon';

interface ProjectIntroProps {
  imgUrl: string;
  title: string;
  vocation: string;
  brand: {
    ai: string;
    xd: string;
    react: string;
  }
}

const ProjectIntro: React.FC<ProjectProps & ProjectIntroProps> = ({imgUrl, title, vocation, brand}) => {

  return (
    <div className={styles.ProjectIntro}>
      <img src="/images/image_cover.svg" alt="Image Cover Left" className={`${styles.ProjectIntro__img__cover} ${styles.ProjectIntro__img__cover__left}`} />
      <img src="/images/image_cover.svg" alt="Image Cover Left" className={`${styles.ProjectIntro__img__cover} ${styles.ProjectIntro__img__cover__right}`} />
      <div className={styles.ProjectIntro__img}>
        <span style={{backgroundImage: `url("/images/${imgUrl}main.jpeg")`}} />
      </div>
      <div className={styles.ProjectIntro__title__wrapper}>
        <div className={styles.ProjectIntro__title}>
          <h2 className={styles.ProjectIntro__title__heading}>{title}</h2>
          <h6 className={styles.ProjectIntro__title__vocation}>{vocation}</h6>
        </div>
        <div className={`${styles.ProjectIntro__software} ${panelWidth.panelHeight}`}>
          { brand.ai &&
            <Icon icon='ai' noPadding={true} />
          }
          { brand.xd &&
            <Icon icon='xd' noPadding={true} />
          }
          { brand.react &&
            <Icon icon='react' noPadding={true} />
          }
        </div>
      </div>
    </div>
  )
};

export default ProjectIntro;
