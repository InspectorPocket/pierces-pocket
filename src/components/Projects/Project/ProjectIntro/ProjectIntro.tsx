import React, { useEffect, useState } from 'react';
import styles from './ProjectIntro.module.scss';
import ProjectProps from "../../../../props/projectsProps"

import Icon from '../../../Icon/Icon';


const ProjectIntro: React.FC<ProjectProps> = (project) => {

  const imgUrl: string = '/images/project';

  let [projId, setProjId] = useState(0);
  if (project && project.id) {
    setProjId(project.id);
  }

  return (
    <div className={styles.ProjectIntro}>
      <div className={styles.ProjectIntro__img}>
        {/* TODO Fix getting corrent image url */}
        <span style={{backgroundImage: `url("${(imgUrl + (projId + 1) + '/' + project.img)}")`}} />
        {/* <img src={ (imgUrl + img) } /> */}
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
