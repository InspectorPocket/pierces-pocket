import React, { useEffect, useState } from 'react';
import styles from './ProjectIntro.module.scss';
import ProjectProps from "../../../../props/projectsProps"

import Icon from '../../../Icon/Icon';

interface ProjectIntroProps {
  thisId: number;
}

const ProjectIntro: React.FC<ProjectProps & ProjectIntroProps> = (project, {thisId}) => {

  const imgUrl: string = `/images/project${(project.thisId + 1)}/`;

  return (
    <div className={styles.ProjectIntro}>
      <div className={styles.ProjectIntro__img}>
        <span style={{backgroundImage: `url("${imgUrl}main.jpeg")`}} />
      </div>
      <div className={styles.ProjectIntro__title}>
        <h2 className={styles.ProjectIntro__title__heading}>{project.title}</h2>
        <h6 className={styles.ProjectIntro__title__vocation}>{project.vocation}</h6>
      </div>
      <div className={styles.ProjectIntro__software}>
        <Icon icon="ai" noPadding={true} />
        <Icon icon="xd" noPadding={true} />
        <Icon icon="react" noPadding={true} />
      </div>
    </div>
  )
};

export default ProjectIntro;
