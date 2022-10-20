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
      {/* 5 */}
      <MediaQuery minWidth={320}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop='39px' defaultValueBot='0'/>
      </MediaQuery>
      {/* 6 */}
      <MediaQuery minWidth={460}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 7 */}
      <MediaQuery minWidth={620}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 8 */}
      <MediaQuery minWidth={728}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 9 */}
      <MediaQuery minWidth={880}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 10 */}
      <MediaQuery minWidth={1024}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 11 */}
      <MediaQuery minWidth={1140}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 12 */}
      <MediaQuery minWidth={1280}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 13 */}
      <MediaQuery minWidth={1336}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 14 */}
      <MediaQuery minWidth={1440}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 15 */}
      <MediaQuery minWidth={1700}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 16 */}
      <MediaQuery minWidth={1920}>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 17/18 */}
      <MediaQuery minWidth={2100}>
        <Panel panelState={state} showGrid={showGrid}/>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 19/20 */}
      <MediaQuery minWidth={2400}>
        <Panel panelState={state} showGrid={showGrid}/>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 21/22 */}
      <MediaQuery minWidth={2800}>
        <Panel panelState={state} showGrid={showGrid}/>
        <Panel panelState={state} showGrid={showGrid}/>
      </MediaQuery>
      {/* 23/24 */}
      <MediaQuery minWidth={3400}>
        <Panel panelState={state} showGrid={showGrid} />
        <Panel panelState={state} showGrid={showGrid} />
      </MediaQuery>
      <Panel panelState={state} showGrid={showGrid} defaultValueTop='64px' defaultValueBot='0'/>
    </div>
  )
};

export default Panels;
