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
    photoshop?: boolean,
    indesign?: boolean,
    animate?: boolean,
    premiere?: boolean,
    max?: boolean
  }
  colour: string;
}

const ProjectIntro: React.FC<ProjectIntroProps> = ({imgUrl, title, vocation, software, colour}) => {

  return (
    <div className={`${styles.ProjectIntro}`}>
      <div className={styles.ProjectIntro__img}>
        <span style={{backgroundImage: `url("/images/${imgUrl}main.jpg")`}}>
        <div className={`${styles.ProjectIntro__software}`}>
          { software && Object.keys(software).map((item, index) => {
              return <Icon key={index} icon={item} noPadding={true} />
            })
          }
          <div className={styles.ProjectIntro__software__details}>
            { software && Object.keys(software).map((item, index) => {
                if (item === 'xd') item = 'Adobe XD';
                if (item === 'figma') item = 'Figma';
                if (item === 'sketch') item = 'Sketch';
                if (item === 'react') item = 'React';
                if (item === 'angular') item = 'Angular';
                if (item === 'wordpress') item = 'Wordpress';
                if (item === 'ai') item = 'Adobe Illustrator';
                if (item === 'photoshop') item = 'Adobe Photoshop';
                if (item === 'indesign') item = 'Adobe InDesign';
                if (item === 'animate') item = 'Adobe Animate';
                if (item === 'premiere') item = 'Adobe Premiere';
                if (item === 'max') item = '3DS Max';
                return <span key={index}>{item}</span>
              })
            }
          </div>
        </div>
        </span>
        
      </div>
      <div className={`${styles.ProjectIntro__content}`}>
        <h1>{title}</h1>
        {/* <hr /> */}
        <div className={styles.ProjectIntro__content__desc}>
          <p>{vocation}</p>
        </div>
      </div>
    </div>
  )
};

export default ProjectIntro;
