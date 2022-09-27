import React, { useEffect, useState } from 'react';
import Panel from './Panel/Panel';
import styles from './Panels.module.scss';
import MediaQuery from 'react-responsive';
import {Route, Link, useLocation} from 'react-router-dom';

interface PanelsProps {

}

const Panels: React.FC = () => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

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
      <Panel defaultValueTop='64px' defaultValueBot='64px' topSize={topPanelHeight} botSize={botPanelHeight}/>
      <Panel defaultValueTop='39px' defaultValueBot='39px' />
      <Panel defaultValueTop='16px'  defaultValueBot='16px' />
      {/* 5 */}
      <MediaQuery minWidth={320}>
        <Panel defaultValueTop='39px' defaultValueBot='0'/>
      </MediaQuery>
      {/* 6 */}
      <MediaQuery minWidth={460}>
        <Panel/>
      </MediaQuery>
      {/* 7 */}
      <MediaQuery minWidth={620}>
        <Panel/>
      </MediaQuery>
      {/* 8 */}
      <MediaQuery minWidth={728}>
        <Panel/>
      </MediaQuery>
      {/* 9 */}
      <MediaQuery minWidth={880}>
        <Panel/>
      </MediaQuery>
      {/* 10 */}
      <MediaQuery minWidth={1024}>
        <Panel/>
      </MediaQuery>
      {/* 11 */}
      <MediaQuery minWidth={1140}>
        <Panel/>
      </MediaQuery>
      {/* 12 */}
      <MediaQuery minWidth={1280}>
        <Panel/>
      </MediaQuery>
      {/* 13 */}
      <MediaQuery minWidth={1336}>
        <Panel/>
      </MediaQuery>
      {/* 14 */}
      <MediaQuery minWidth={1440}>
        <Panel/>
      </MediaQuery>
      {/* 15 */}
      <MediaQuery minWidth={1700}>
        <Panel/>
      </MediaQuery>
      {/* 16 */}
      <MediaQuery minWidth={1920}>
        <Panel/>
      </MediaQuery>
      {/* 17/18 */}
      <MediaQuery minWidth={2100}>
        <Panel/>
        <Panel/>
      </MediaQuery>
      {/* 19/20 */}
      <MediaQuery minWidth={2400}>
        <Panel/>
        <Panel/>
      </MediaQuery>
      {/* 21/22 */}
      <MediaQuery minWidth={2800}>
        <Panel/>
        <Panel/>
      </MediaQuery>
      {/* 23/24 */}
      <MediaQuery minWidth={3400}>
        <Panel />
        <Panel />
      </MediaQuery>
      <Panel defaultValueTop='64px' defaultValueBot='0'/>
    </div>
  )
};

export default Panels;
