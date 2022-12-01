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
  software: {
    xd?: boolean,
    figma?: boolean,
    sketch?: boolean,
    react?: boolean,
    angular?: boolean,
    wordpress?: boolean,
    ai?: boolean,
    animate?: boolean,
    premiere?: boolean,
    max?: boolean
  }
  colour: string;
}

const ProjectIntro: React.FC<ProjectIntroProps> = ({imgUrl, title, vocation, software, colour}) => {

  return (
    <div className={styles.ProjectIntro} style={{backgroundColor: colour}}>
      <div className={styles.ProjectIntro__img}>
        <span style={{backgroundImage: `url("/images/${imgUrl}main.png")`}} />
      </div>
      <div className={styles.ProjectIntro__content}>
        <h2>{title}</h2>
        <div className={`${styles.ProjectIntro__software} ${panelWidth.panelHeight}`}>
          { software && Object.keys(software).map(item => {
              return <Icon icon={item} noPadding={true} />
            })
          }
          <div className={styles.ProjectIntro__software__details}>
            { software && Object.keys(software).map(item => {
                if (item === 'xd') item = 'Adobe XD';
                if (item === 'figma') item = 'Figma';
                if (item === 'sketch') item = 'Sketch';
                if (item === 'react') item = 'React';
                if (item === 'angular') item = 'Angular';
                if (item === 'wordpress') item = 'Wordpress';
                if (item === 'ai') item = 'Adobe Illustrator';
                if (item === 'animate') item = 'Adobe Animate';
                if (item === 'premiere') item = 'Adobe Premiere';
                if (item === 'max') item = '3DS Max';
                return <span>{item}</span>
              })
            }
          </div>
        </div>
        <hr />
        <p className={styles.ProjectIntro__title__vocation}>{vocation}</p>
      </div>
    </div>
  )
};

export default ProjectIntro;
