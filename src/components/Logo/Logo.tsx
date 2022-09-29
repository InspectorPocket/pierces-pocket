import React from 'react';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import colours from '../../sass/_foundation/_colours.module.scss';

import logo from '../../../assets/logo.svg';

interface LogoProps {
  setTransition: Function;
  closeMenu: Function;
}

const Logo: React.FC<LogoProps> = ({setTransition, closeMenu}) => {

  return (
    <Link to="/" className={styles.Logo__container}onClick={() => {
      setTransition("close");
      closeMenu();
    }}>
      {/* <img src={logo} alt="logo" /> */}
      <div className={styles.Logo}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 44">
          <g id="logo" data-name="logo">
            <path fill={colours.darker} d="M36,18A18,18,0,0,1,18,36a3,3,0,0,1,0-6,7,7,0,1,0-7-7V38.5a5.5,5.5,0,0,1-11,0V18a18,18,0,0,1,36,0Z"/>
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
