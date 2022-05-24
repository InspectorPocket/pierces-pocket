import React from 'react';
import Panel from './Panel/Panel';
import PanelLeft from './PanelLeft/PanelLeft';
import styles from './Panels.module.scss';
import MediaQuery from 'react-responsive';
import PanelRight from './PanelRight/PanelRight';

const Panels: React.FC = () => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div className={styles.panels}>
      <PanelLeft/>
      <Panel/>
      <Panel/>
      {/* 5 */}
      <MediaQuery minWidth={320}>
        <Panel/>
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
        <Panel/>
        <Panel/>
      </MediaQuery>
      {/* <PanelRight/> */}
      <Panel/>
    </div>
  )
};

export default Panels;
