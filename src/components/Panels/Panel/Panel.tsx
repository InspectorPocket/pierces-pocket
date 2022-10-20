import React, { useEffect, useState } from 'react';
import styles from './Panel.module.scss';
import {Route, Link, useLocation} from 'react-router-dom';

interface PanelProps {
  topSize?: string;
  botSize?: string;

  showGrid?: boolean;
  panelState: string;
  defaultValueTop?: string;
  defaultValueBot?: string;
}

const Panel: React.FC<PanelProps> = ({topSize, botSize, panelState, defaultValueTop, defaultValueBot, showGrid}) => {

  let [topPanelSize, setTopPanelSize] = useState('translateY(25%)');
  let [botPanelSize, setBotPanelSize] = useState('translateY(0)');

  useEffect(() => {
    let cleanup = true;
    if (cleanup) {
      if (panelState === 'projects') {
        setTopPanelSize(`translateY(25%)`);
        if (showGrid) setBotPanelSize(`translateY(-${defaultValueBot})`);
        else setBotPanelSize(`translateY(0)`);
      }
      else if (panelState === 'fixed') {
        setTopPanelSize(`translateY(${defaultValueTop})`);
        setBotPanelSize(`translateY(-${defaultValueBot})`);
      }
    };
    cleanup = false;
  }, [panelState, showGrid])

  const setTransition = (position?: string) => {
    if (position === 'top') return styles.panel__top__transition;
    if (position === 'bot') return styles.panel__bot__transition;
  }
  
  return (
    <div className={styles.panel} >

      { panelState &&
        <div>
          <span className={styles.panel__top} style={{transform: topPanelSize}} />
          <span className={styles.panel__bot} style={{transform: botPanelSize}} />
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
