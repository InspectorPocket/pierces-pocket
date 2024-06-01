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
    <Link to="/" className={`${styles.Logo__container}`} onClick={() => {
      setTransition("close");
      closeMenu();
    }}>
      {/* <img src={logo} alt="logo" /> */}
      <div className={`${styles.Logo} ${projectActive ? styles.Logo_short : ''}`}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 44">
          <g id="logo" data-name="logo">
            <path fill={colours.darker} d="M36,18A18,18,0,0,1,18,36a3,3,0,0,1,0-6,7,7,0,1,0-7-7V38.5a5.5,5.5,0,0,1-11,0V18a18,18,0,0,1,36,0Z"/>
          </g>
        </svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <g id="logo" data-name="logo">
            <path fill={colours.darker} d="M32,16c0,8.75-7.02,15.85-15.73,15.99-.09,.01-.18,.01-.27,.01s-.18,0-.27-.01c-1.35-.14-2.4-1.27-2.4-2.66,0-1.47,1.19-2.66,2.67-2.66,3.43,0,6.22-2.79,6.22-6.23s-2.79-6.22-6.22-6.22-6.23,2.79-6.23,6.22v6.67c0,1.18-.42,2.25-1.12,3.1-.88,1.09-2.24,1.79-3.76,1.79-2.71,0-4.89-2.19-4.89-4.89v-11.11C0,7.16,7.16,0,16,0s16,7.16,16,16Z"/>
          </g>
        </svg> */}
        <svg width="33" height="27" viewBox="0 0 33 27" xmlns="http://www.w3.org/2000/svg">
          <path fill={colours.darker} d="M14.3253 6.3989C12.0986 4.39415 8.81864 4.1174 6.51864 5.5214C4.25198 6.94565 2.80531 9.6389 2.32531 12.2242C1.23865 19.2509 7.39197 25.4407 14.3386 23.7937C24.2853 21.0599 29.332 9.6389 25.7986 -9.91885e-05C28.9053 5.28515 28.8586 12.2984 25.792 17.6782C22.7386 23.1322 16.4853 27.6142 10.0453 26.5612C3.33864 25.5082 -1.25469 18.4679 0.305311 11.8124C1.07864 8.6939 3.04531 5.7239 5.93865 4.32665C8.84531 3.03065 12.4186 3.85415 14.332 6.3989L14.3253 6.3989Z"/>
          <circle cx="31.5" cy="16.5" r="1.5" fill={colours.paint}/>
        </svg>

      </div>
    </Link>
  ) 
};

export default Logo;
