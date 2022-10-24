import React, { useEffect, useState } from 'react';
import Panel from './Panel/Panel';
import styles from './Panels.module.scss';
import MediaQuery from 'react-responsive';
import {Route, Link, useLocation} from 'react-router-dom';

interface PanelsProps {
  state: string;
  bg?: boolean;
  showGrid?: boolean;
}

const Panels: React.FC<PanelsProps> = ({state, bg, showGrid}) => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  // console.log(state);
  
  const topPanelSizes = [
    '50%',
    '25%',
    'calc(48px + 4.4444vw)',
    '40px',
    '16px'
  ]

  return (
    <div className={`${styles.panels} ${bg ? styles.panels_bg : ''}`}>
      {/* TODO useState to cycle values on different screen sizes */}
      <Panel panelState={state} showGrid={showGrid} defaultValueTop='64px' defaultValueBot='64px'/>
      <Panel panelState={state} showGrid={showGrid} defaultValueTop='39px' defaultValueBot='39px' />
      <Panel panelState={state} showGrid={showGrid} defaultValueTop='16px'  defaultValueBot='16px' />

      <MediaQuery minWidth={320}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop='39px' defaultValueBot='0'/>
      </MediaQuery>

      <MediaQuery minWidth={400}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={480}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={560}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={640}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={720}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={800}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={880}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={960}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1040}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1120}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1200}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1280}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1360}>
        <Panel panelState={state} showGrid={showGrid}/>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1440}>
        <Panel panelState={state} showGrid={showGrid}/>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1520}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1600}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1680}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1760}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1840}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={1920}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2000}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2080}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2160}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2240}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2320}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2400}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2480}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2560}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2640}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2720}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2800}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2880}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={2940}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={3020}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={3100}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={3180}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={3260}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={3340}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={3420}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>

      <MediaQuery minWidth={3500}>
        <Panel panelState={state} showGrid={showGrid} />
      </MediaQuery>

      <MediaQuery minWidth={3580}>
        <Panel panelState={state} showGrid={showGrid} />
      </MediaQuery>

      <MediaQuery minWidth={3660}>
        <Panel panelState={state} showGrid={showGrid} />
      </MediaQuery>

      <MediaQuery minWidth={3740}>
        <Panel panelState={state} showGrid={showGrid} />
      </MediaQuery>

      <MediaQuery minWidth={3820}>
        <Panel panelState={state} showGrid={showGrid} />
      </MediaQuery>

      <Panel panelState={state} showGrid={showGrid} defaultValueTop='64px' defaultValueBot='0'/>
    </div>
  )
};

export default Panels;
