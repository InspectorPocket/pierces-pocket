import React, { useEffect, useState } from 'react';
import ProjectProps from "../../../props/projectsProps"

import styles from './ProjectIntro.module.scss';
import panelWidth from '../../../sass/_foundation/_panelWidth.module.scss';
import colours from '../../../sass/_foundation/_colours.module.scss'

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
  colour: string;
}

const ProjectIntro: React.FC<ProjectProps & ProjectIntroProps> = ({imgUrl, title, vocation, brand, colour}) => {

  return (
    <div className={styles.ProjectIntro} style={{backgroundColor: colour}}>
      {/* <img src="/images/image_cover.svg" alt="Image Cover Left" className={`${styles.ProjectIntro__img__cover} ${styles.ProjectIntro__img__cover__left}`} /> */}
      {/* <img src="/images/image_cover.svg" alt="Image Cover Left" className={`${styles.ProjectIntro__img__cover} ${styles.ProjectIntro__img__cover__right}`} /> */}
      <div className={styles.ProjectIntro__img}>
        {/* <img src={`/images/${imgUrl}main.png`} alt="Image Cover Left" /> */}
        <span style={{backgroundImage: `url("/images/${imgUrl}main.png")`}} />
      </div>
      <div className={styles.ProjectIntro__content}>
        <h2>{title}</h2>
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
        <hr />
        <p className={styles.ProjectIntro__title__vocation}>{vocation}</p>
      </div>
    </div>
  )
};

export default ProjectIntro;
