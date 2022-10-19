import React, { useEffect, useState } from 'react';
import styles from './ProjectIntro.module.scss';
import ProjectProps from "../../../props/projectsProps"

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
      <div className={styles.ProjectIntro__img}>
        <span style={{backgroundImage: `url("/images/${imgUrl}main.jpeg")`}} />
      </div>
      <div className={styles.ProjectIntro__title}>
        <h2 className={styles.ProjectIntro__title__heading}>{title}</h2>
        <h6 className={styles.ProjectIntro__title__vocation}>{vocation}</h6>
      </div>
      <div className={styles.ProjectIntro__software}>
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
  )
};

export default ProjectIntro;
