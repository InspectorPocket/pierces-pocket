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
      if (panelState === 'home') {
        setTopPanelSize(`51%`);
        setBotPanelSize(`51%`);
      }
      else if (panelState === 'projects') {
        setTopPanelSize(`128px`);
        if (showGrid) setBotPanelSize(`${defaultValueBot}`);
        else setBotPanelSize(`0`);
      }
      else if (panelState === 'nav') {
        setTopPanelSize(`0`);
        setBotPanelSize(`0`);
      }
      else if (panelState === 'nav-open') {
        setTopPanelSize(`51%`);
        setBotPanelSize(`51%`);
      }
      else if (panelState === 'fixed') {
        setTopPanelSize(`${defaultValueTop}`);
        setBotPanelSize(`${defaultValueBot}`);
      }
    };
    cleanup = false;
  }, [panelState, showGrid, defaultValueTop, defaultValueBot])

  const setTransition = (position?: string) => {
    if (position === 'top') return styles.panel__top__transition;
    if (position === 'bot') return styles.panel__bot__transition;
  }
  
  return (
    <div className={styles.panel} >

      { panelState && panelState !== 'transition' &&
        <div>
          <span className={`${styles.panel__top} ${panelState === 'home' || panelState === 'nav' || panelState === 'nav-open' ? styles.panel_noBorder : ''}`}
            style={{height: topPanelSize}} />
          <span className={`${styles.panel__bot} ${panelState === 'home' || panelState === 'nav' || panelState === 'nav-open' ? styles.panel_noBorder : ''}`}
            style={{height: botPanelSize}} />
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
