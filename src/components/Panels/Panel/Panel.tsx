import React, { useEffect, useState } from 'react';
import styles from './Panel.module.scss';
import {Route, Link, useLocation} from 'react-router-dom';

interface PanelProps {
  topSize?: string;
  botSize?: string;

  panelState: string;
  defaultValueTop?: string;
  defaultValueBot?: string;
}

const Panel: React.FC<PanelProps> = ({topSize, botSize, panelState, defaultValueTop, defaultValueBot}) => {

  // let [topPanelSize, setTopPanelSize] = useState(topSize ? topSize : '50%');
  // let [botPanelSize, setBotPanelSize] = useState(botSize ? botSize : '-50%');
  let [topPanelSize, setTopPanelSize] = useState('50%');
  let [botPanelSize, setBotPanelSize] = useState('-50%');

  // let grrr: string = panelState;

  const projectsUrlMatch = new RegExp('\^/projects/?$');

  const location = useLocation();
  
  const setTopSize = (position?: string) => {
    if (location.pathname === '/') {
      console.log('home');
      if (position === 'top') return {transform: `translateY(50%)`}
      if (position === 'bot') return {transform: `translateY(-50%)`}
    }
    if (location.pathname === '/projects') { // || project panel is shown
      // console.log('projects');
      // TODO set transition on a timeout then set below values
      if (projectsUrlMatch.test(location.pathname)) {
        if (position === 'top') return {transform: `translateY(25%)`}
        if (position === 'bot') return {transform: `translateY(0)`}
        console.log('projects');
        
      } else {
        if (position === 'top') return {transform: `translateY(${defaultValueTop})`}
        if (position === 'bot') return {transform: `translateY(-${defaultValueBot})`}
        console.log('individual project');
        
      }
    }
    if (location.pathname === '/extras') {
      // console.log('extras');
    } else {
      // console.log('project');
      // TODO set transition on a timeout then set below values
      
    }
  };

  const setTransition = (position?: string) => {
    if (position === 'top') return styles.panel__top__transition;
    if (position === 'bot') return styles.panel__bot__transition;
  }
  
  return (
    <div className={styles.panel} >

      { panelState && panelState === 'close' &&
        <div>
          <span className={styles.panel__top} style={{transform: `translateY(50%)`}}></span>
          <span className={styles.panel__bot} style={{transform: `translateY(-50%)`}}></span>
        </div>
      }
      {/* TODO make these not a class so the animation can dynamically be intersected */}
      { panelState && panelState === 'fixed' &&
        <div>
          <span className={styles.panel__top} style={setTopSize('top')}></span>
          <span className={styles.panel__bot} style={setTopSize('bot')}></span>
        </div>
      }
      { panelState && panelState === 'transition' &&
        <div>
          <span className={`${styles.panel__top} ${setTransition('top')}`}></span>
          <span className={`${styles.panel__bot} ${setTransition('bot')}`}></span>
        </div>
      }

    </div>
  )
};

export default Panel;
