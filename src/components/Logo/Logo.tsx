import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Logo.module.scss';
import colours from '../../sass/_foundation/_colours.module.scss';
import panelWidth from '../../sass/_foundation/_panelWidth.module.scss';

import logo from '../../../assets/logo.svg';

interface LogoProps {
  setTransition: Function;
  closeMenu: Function;
  trackMenuHide?: boolean;
}

const Logo: React.FC<LogoProps> = ({setTransition, closeMenu, trackMenuHide}) => {

  const location = useLocation();
  const projectsUrlMatch = new RegExp('\^/projects/?$');
  const regexPathname = projectsUrlMatch.test(location.pathname);
  let [projectActive, setProjectActive] = useState(false);

  useEffect(() => {
    let cleanup = true;
    if (cleanup) {
      if (location.pathname.includes('projects') && !regexPathname && !trackMenuHide) {
        setProjectActive(true);
      } else {
        setProjectActive(false);
      }
    }
    cleanup = false;
  }, [location, trackMenuHide])
  
  return (
    <Link to="/" className={`${styles.Logo__container} ${panelWidth.panelWidth}`} onClick={() => {
      setTransition("close");
      closeMenu();
    }}>
      {/* <img src={logo} alt="logo" /> */}
      <div className={`${styles.Logo} ${projectActive ? styles.Logo_short : ''}`}>
      
        {/* <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.56 130">
          <g id="Layer_1-2" data-name="Layer_1">
            <path fill={colours.darker} d="M34.81,95.23c3.92-1.33,7.44-3.8,10.06-7.01,3.92-4.82,5.8-10.86,7.17-16.71.87-3.87,1.32-7.81,1.49-11.76.34-8.63-1.93-27.15-10.82-31.24-6.19-2.62-11.98,4.48-14.16,8.39-5.9,11.51-6.23,30.25-4.56,53.68,1.03,14.36,4.39,27.2,4.39,27.2,1.11,3.99,2.27,7.94,4.42,11.58,0,0,.64,1.32,2.29.17.52-.36,1.19-1.1,1.7-1.82,0,0,.69-1.04.86-1.92.18-.95-.39-2.13-.39-2.13,0,0-5.17-11.11-7.23-33-2.51-26.84.11-40.91.11-40.91.59-3.31,1.41-6.57,2.86-9.6.78-1.45,2.02-3.19,3.19-4.44,1.52-1.48,2.81-2.73,4.53-2.21,1.85.89,2.89,2.97,3.88,5.04,1.42,3.18,2.41,6.74,3.06,10.27,2.28,11.96,0,31.78-10.66,39.2-1,.67-2,1.23-2.99,1.67,0,0,.22,2.22.33,2.96.1.66.48,2.62.48,2.62Z"/>
            <path fill={colours.dark} d="M19.89,88.89c-3.22-1.82-6.09-4.72-8.4-8.28C.16,60.8,1.85,36.45,22.66,1.13c0,0,.17-.25.09-.59-.05-.24-.17-.46-.17-.46-.19-.32-.74.37-.74.37C12.82,11.85-1.7,33.36.16,60.8c.82,12.15,7.96,28.68,20.06,33.9,0,0-.23-2.23-.27-2.98s-.06-2.84-.06-2.84Z"/>
          </g>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <g id="logo" data-name="logo">
            <path fill={colours.darker} d="M32,16c0,8.75-7.02,15.85-15.73,15.99-.09,.01-.18,.01-.27,.01s-.18,0-.27-.01c-1.35-.14-2.4-1.27-2.4-2.66,0-1.47,1.19-2.66,2.67-2.66,3.43,0,6.22-2.79,6.22-6.23s-2.79-6.22-6.22-6.22-6.23,2.79-6.23,6.22v6.67c0,1.18-.42,2.25-1.12,3.1-.88,1.09-2.24,1.79-3.76,1.79-2.71,0-4.89-2.19-4.89-4.89v-11.11C0,7.16,7.16,0,16,0s16,7.16,16,16Z"/>
          </g>
        </svg>
      </div>
    </Link>
  ) 
};

export default Logo;
