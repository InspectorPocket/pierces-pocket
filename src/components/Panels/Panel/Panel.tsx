import React, { useEffect, useState } from 'react';
import styles from './Panel.module.scss';
import {Route, Link, useLocation} from 'react-router-dom';

interface PanelProps {
  topSize?: string;
  botSize?: string;

  panelState?: string;
  defaultValueTop?: string;
  defaultValueBot?: string;
}

const Panel: React.FC<PanelProps> = ({topSize, botSize, panelState, defaultValueTop, defaultValueBot}) => {

  // let [topPanelSize, setTopPanelSize] = useState(topSize ? topSize : '50%');
  // let [botPanelSize, setBotPanelSize] = useState(botSize ? botSize : '-50%');
  let [topPanelSize, setTopPanelSize] = useState('50%');
  let [botPanelSize, setBotPanelSize] = useState('-50%');

  const location = useLocation();

  // if (location.pathname === '/') {
  //   console.log('closing...');
  // } else if (location.pathname === '/projects') {
  //   console.log('push top panels to 25%');
  //   console.log('push bot panels to 0');
  // } else {
  //   console.log('opening panels to set values');
  // }
  
  const setTopSize = (position?: string) => {
    if (location.pathname === '/') {
      console.log('home');
      if (position === 'top') return {transform: `translateY(50%)`}
      if (position === 'bot') return {transform: `translateY(-50%)`}
    }
    if (location.pathname === '/projects') {
      console.log('projects');
      // TODO set transition on a timeout then set below values
      if (position === 'top') return {transform: `translateY(25%)`}
      if (position === 'bot') return {transform: `translateY(0)`}
    }
    if (location.pathname === '/extras') {
      console.log('extras');
    } else {
      console.log('project');
      // TODO set transition on a timeout then set below values
      if (position === 'top') return {transform: `translateY(${defaultValueTop})`}
      if (position === 'bot') return {transform: `translateY(-${defaultValueBot})`}
    }
    // setTopPanelSize(size.topSize)
    // setBotPanelSize(size.botSize)
  };
  
  return (
    <div className={styles.panel} >
      {/* <span className={styles.panel__top} 
        style={
          location.pathname === '/' ? {transform: `translateY(50%)`} : {transform: `translateY(50%)`} ||
          location.pathname === '/projects' ? {transform: `translateY(25%)`} : {transform: `translateY(25%)`} ||
          location.pathname === "/projects/pierce's-pocket" ? {transform: `translateY(${defaultValue})`} : {transform: `translateY(${defaultValue})`}
        }
      >       */}
      <span className={styles.panel__top} style={setTopSize('top')}></span>
      <span className={styles.panel__bot} style={setTopSize('bot')}></span>
      {/* <span className={styles.panel__bot} 
        style={
          location.pathname === '/' ? {transform: `translateY(-50%)`} : {transform: `translateY(-50%)`} ||
          location.pathname === '/projects' ? {transform: `translateY(-${defaultValue})`} : {transform: `translateY(-${defaultValue})`}
        }></span> */}
    </div>
  )
};

export default Panel;
