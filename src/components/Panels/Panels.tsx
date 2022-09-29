import React, { useEffect, useState } from 'react';
import Panel from './Panel/Panel';
import styles from './Panels.module.scss';
import MediaQuery from 'react-responsive';
import {Route, Link, useLocation} from 'react-router-dom';

interface PanelsProps {
  state: string;
}

const Panels: React.FC<PanelsProps> = ({state}) => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  // console.log(state);
  

  let [topPanelHeight, setTopPanelHeight] = useState('');
  let [botPanelHeight, setBotPanelHeight] = useState('');
  const topPanelSizes = [
    '50%',
    '25%',
    'calc(48px + 4.4444vw)',
    '40px',
    '16px'
  ]

  // const setTopPanel = (panel: number) => {
  //   if (size) {
  //     return;
  //   }
  //   setTopPanelHeight('test')
  //   setBotPanelHeight('test')
  // };

  const location = useLocation();

  // if (location.pathname === '/') {
  //   setTopPanelHeight('calc(48px + 4.4444vw)');
  //   setTopPanelHeight('calc(-48px - 4.4444vw)');
  //   console.log('home');
  // } else if (location.pathname === '/projects') {
  //   console.log('projects');
  // } else {
  //   console.log('project');
  // }

  return (
    <div className={styles.panels}>
      <Panel panelState={state} defaultValueTop='64px' defaultValueBot='64px'/>
      <Panel panelState={state} defaultValueTop='39px' defaultValueBot='39px' />
      <Panel panelState={state} defaultValueTop='16px'  defaultValueBot='16px' />
      {/* 5 */}
      <MediaQuery minWidth={320}>
        <Panel panelState={state} defaultValueTop='39px' defaultValueBot='0'/>
      </MediaQuery>
      {/* 6 */}
      <MediaQuery minWidth={460}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 7 */}
      <MediaQuery minWidth={620}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 8 */}
      <MediaQuery minWidth={728}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 9 */}
      <MediaQuery minWidth={880}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 10 */}
      <MediaQuery minWidth={1024}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 11 */}
      <MediaQuery minWidth={1140}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 12 */}
      <MediaQuery minWidth={1280}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 13 */}
      <MediaQuery minWidth={1336}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 14 */}
      <MediaQuery minWidth={1440}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 15 */}
      <MediaQuery minWidth={1700}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 16 */}
      <MediaQuery minWidth={1920}>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 17/18 */}
      <MediaQuery minWidth={2100}>
        <Panel panelState={state}/>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 19/20 */}
      <MediaQuery minWidth={2400}>
        <Panel panelState={state}/>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 21/22 */}
      <MediaQuery minWidth={2800}>
        <Panel panelState={state}/>
        <Panel panelState={state}/>
      </MediaQuery>
      {/* 23/24 */}
      <MediaQuery minWidth={3400}>
        <Panel panelState={state} />
        <Panel panelState={state} />
      </MediaQuery>
      <Panel panelState={state} defaultValueTop='64px' defaultValueBot='0'/>
    </div>
  )
};

export default Panels;
