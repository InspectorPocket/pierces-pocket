import React, { useEffect, useState } from 'react';
import Panel from './Panel/Panel';
import styles from './Panels.module.scss';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import panelWidth from '../../sass/_foundation/_panelWidth.module.scss'

interface PanelsProps {
  state: string;
  bg?: boolean;
  showGrid?: boolean;
}

const Panels: React.FC<PanelsProps> = ({state, bg, showGrid}) => {

  const is320 = useMediaQuery({ query: `(min-width: 320px) and (max-width: ${320 + 79}px)` });
  const is400 = useMediaQuery({ query: `(min-width: 400px) and (max-width: ${400 + 79}px)` });
  const is480 = useMediaQuery({ query: `(min-width: 480px) and (max-width: ${480 + 79}px)` });
  const is560 = useMediaQuery({ query: `(min-width: 560px) and (max-width: ${560 + 79}px)` });
  const is640 = useMediaQuery({ query: `(min-width: 640px) and (max-width: ${640 + 79}px)` });
  const is720 = useMediaQuery({ query: `(min-width: 720px) and (max-width: ${720 + 79}px)` });
  const is800 = useMediaQuery({ query: `(min-width: 800px) and (max-width: ${800 + 79}px)` });
  const is880 = useMediaQuery({ query: `(min-width: 880px) and (max-width: ${880 + 79}px)` });
  const is960 = useMediaQuery({ query: `(min-width: 960px) and (max-width: ${960 + 79}px)` });
  const is1040 = useMediaQuery({ query: `(min-width: 1040px) and (max-width: ${1040 + 79}px)` });
  const is1120 = useMediaQuery({ query: `(min-width: 1120px) and (max-width: ${1120 + 79}px)` });
  const is1200 = useMediaQuery({ query: `(min-width: 1200px) and (max-width: ${1200 + 79}px)` });
  const is1280 = useMediaQuery({ query: `(min-width: 1280px) and (max-width: ${1280 + 79}px)` });
  const is1360 = useMediaQuery({ query: `(min-width: 1360px) and (max-width: ${1360 + 79}px)` });
  const is1440 = useMediaQuery({ query: `(min-width: 1440px) and (max-width: ${1440 + 79}px)` });
  const is1520 = useMediaQuery({ query: `(min-width: 1520px) and (max-width: ${1520 + 79}px)` });
  const is1600 = useMediaQuery({ query: `(min-width: 1600px) and (max-width: ${1600 + 79}px)` });
  const is1680 = useMediaQuery({ query: `(min-width: 1680px) and (max-width: ${1680 + 79}px)` });
  const is1760 = useMediaQuery({ query: `(min-width: 1760px) and (max-width: ${1760 + 79}px)` });
  const is1840 = useMediaQuery({ query: `(min-width: 1840px) and (max-width: ${1840 + 79}px)` });
  const is1920 = useMediaQuery({ query: `(min-width: 1920px) and (max-width: ${1920 + 79}px)` });
  const is2000 = useMediaQuery({ query: `(min-width: 2000px) and (max-width: ${2000 + 79}px)` });
  const is2080 = useMediaQuery({ query: `(min-width: 2080px) and (max-width: ${2080 + 79}px)` });
  const is2160 = useMediaQuery({ query: `(min-width: 2160px) and (max-width: ${2160 + 79}px)` });
  const is2240 = useMediaQuery({ query: `(min-width: 2240px) and (max-width: ${2240 + 79}px)` });
  const is2320 = useMediaQuery({ query: `(min-width: 2320px) and (max-width: ${2320 + 79}px)` });
  const is2400 = useMediaQuery({ query: `(min-width: 2400px) and (max-width: ${2400 + 79}px)` });
  const is2480 = useMediaQuery({ query: `(min-width: 2480px) and (max-width: ${2480 + 79}px)` });
  const is2560 = useMediaQuery({ query: `(min-width: 2560px) and (max-width: ${2560 + 79}px)` });
  const is2640 = useMediaQuery({ query: `(min-width: 2640px) and (max-width: ${2640 + 79}px)` });
  const is2720 = useMediaQuery({ query: `(min-width: 2720px) and (max-width: ${2720 + 79}px)` });
  const is2800 = useMediaQuery({ query: `(min-width: 2800px) and (max-width: ${2800 + 79}px)` });
  const is2880 = useMediaQuery({ query: `(min-width: 2880px) and (max-width: ${2880 + 79}px)` });
  const is2960 = useMediaQuery({ query: `(min-width: 2960px) and (max-width: ${2960 + 79}px)` });
  const is3020 = useMediaQuery({ query: `(min-width: 3020px) and (max-width: ${3020 + 79}px)` });
  const is3100 = useMediaQuery({ query: `(min-width: 3100px) and (max-width: ${3100 + 79}px)` });
  const is3180 = useMediaQuery({ query: `(min-width: 3180px) and (max-width: ${3180 + 79}px)` });
  const is3260 = useMediaQuery({ query: `(min-width: 3260px) and (max-width: ${3260 + 79}px)` });
  const is3340 = useMediaQuery({ query: `(min-width: 3340px) and (max-width: ${3340 + 79}px)` });
  const is3420 = useMediaQuery({ query: `(min-width: 3420px) and (max-width: ${3420 + 79}px)` });
  const is3500 = useMediaQuery({ query: `(min-width: 3500px) and (max-width: ${3500 + 79}px)` });
  const is3580 = useMediaQuery({ query: `(min-width: 3580px) and (max-width: ${3580 + 79}px)` });
  const is3660 = useMediaQuery({ query: `(min-width: 3660px) and (max-width: ${3660 + 79}px)` });
  const is3740 = useMediaQuery({ query: `(min-width: 3740px) and (max-width: ${3740 + 79}px)` });
  const is3820 = useMediaQuery({ query: `(min-width: 3820px) and (max-width: ${3820 + 79}px)` });
  
  
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  let [panelHeight, setPanelHeight] = useState(panelWidth._320);

  useEffect(() => {
    let cleanup = true;
    if (cleanup) {
      if (is320) setPanelHeight(panelWidth._320);
      else if (is400) setPanelHeight(panelWidth._400);
      else if (is480) setPanelHeight(panelWidth._480);
      else if (is560) setPanelHeight(panelWidth._560);
      else if (is640) setPanelHeight(panelWidth._640);
      else if (is720) setPanelHeight(panelWidth._720);
      else if (is800) setPanelHeight(panelWidth._800);
      else if (is880) setPanelHeight(panelWidth._880);
      else if (is960) setPanelHeight(panelWidth._960);
      else if (is1040) setPanelHeight(panelWidth._1040);
      else if (is1120) setPanelHeight(panelWidth._1120);
      else if (is1200) setPanelHeight(panelWidth._1200);
      else if (is1280) setPanelHeight(panelWidth._1280);
      else if (is1360) setPanelHeight(panelWidth._1360);
      else if (is1440) setPanelHeight(panelWidth._1440);
      else if (is1520) setPanelHeight(panelWidth._1520);
      else if (is1600) setPanelHeight(panelWidth._1600);
      else if (is1680) setPanelHeight(panelWidth._1680);
      else if (is1760) setPanelHeight(panelWidth._1760);
      else if (is1840) setPanelHeight(panelWidth._1840);
      else if (is1920) setPanelHeight(panelWidth._1920);
      else if (is2000) setPanelHeight(panelWidth._2000);
      else if (is2080) setPanelHeight(panelWidth._2080);
      else if (is2160) setPanelHeight(panelWidth._2160);
      else if (is2240) setPanelHeight(panelWidth._2240);
      else if (is2320) setPanelHeight(panelWidth._2320);
      else if (is2400) setPanelHeight(panelWidth._2400);
      else if (is2480) setPanelHeight(panelWidth._2480);
      else if (is2560) setPanelHeight(panelWidth._2560);
      else if (is2640) setPanelHeight(panelWidth._2640);
      else if (is2720) setPanelHeight(panelWidth._2720);
      else if (is2800) setPanelHeight(panelWidth._2800);
      else if (is2880) setPanelHeight(panelWidth._2880);
      else if (is2960) setPanelHeight(panelWidth._2960);
      else if (is3020) setPanelHeight(panelWidth._3020);
      else if (is3100) setPanelHeight(panelWidth._3100);
      else if (is3180) setPanelHeight(panelWidth._3180);
      else if (is3260) setPanelHeight(panelWidth._3260);
      else if (is3340) setPanelHeight(panelWidth._3340);
      else if (is3420) setPanelHeight(panelWidth._3420);
      else if (is3500) setPanelHeight(panelWidth._3500);
      else if (is3580) setPanelHeight(panelWidth._3580);
      else if (is3660) setPanelHeight(panelWidth._3660);
      else if (is3740) setPanelHeight(panelWidth._3740);
      else if (is3820) setPanelHeight(panelWidth._3820);
      else setPanelHeight(panelWidth.default);
    };
    cleanup = false;
  }, [is320, is400, is480, is560, is640, is720, is800, is880, is960, is1040, is1120, is1200, is1280, is1360, is1440, is1520, is1600, is1680, is1760, is1840, is1920, is2000, is2080, is2160, is2240, is2320, is2400, is2480, is2560, is2640, is2720, is2800, is2880, is2960, is3020, is3100, is3180, is3260, is3340, is3420, is3500, is3580, is3660, is3740, is3820]);

  return (
    <div className={`${styles.panels} ${bg ? styles.panels_bg : ''}`}>

      <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${panelHeight}vw`} defaultValueBot={`${Number(panelHeight)}vw`}/>
      <MediaQuery minWidth={320}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 2}vw`} defaultValueBot={`${Number(panelHeight) / 2}vw`} />
      </MediaQuery>
      <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`${Number(panelHeight) / 4}vw`} />
      <MediaQuery minWidth={400}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`} defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2160}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2080}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2000}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={480}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={560}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={640}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={720}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={800}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={880}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={960}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1040}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1120}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>
      
      <MediaQuery minWidth={1200}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1280}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1360}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>
      
      <MediaQuery minWidth={1440}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1520}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1600}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1680}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1760}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1840}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={1920}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2240}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2320}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2400}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2480}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2560}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2640}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2720}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2800}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2880}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={2940}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3020}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3100}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3180}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3260}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3340}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3420}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3500}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3580}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3660}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3740}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery minWidth={3820}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>

      <MediaQuery maxWidth={320}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 4}vw`}  defaultValueBot={`0`} />
      </MediaQuery>
      <MediaQuery minWidth={320}>
        <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${Number(panelHeight) / 2}vw`} defaultValueBot={`0`} />
      </MediaQuery>
      <Panel panelState={state} showGrid={showGrid} defaultValueTop={`${panelHeight}vw`} defaultValueBot={`0`}/>

    </div>
  )
};

export default Panels;
