import React from 'react';
import styles from './Logo.module.scss';
import colours from '../../../sass/_foundation/_colours.module.scss';

import logo from '../../../assets/logo.svg';

const Logo: React.FC = () => {

  return (
    
    <div className={styles.logo}>
      {/* <img src={logo} alt="logo" /> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 44">
        <g id="logo" data-name="logo">
          <path fill={colours.darker} d="M36,18A18,18,0,0,1,18,36a3,3,0,0,1,0-6,7,7,0,1,0-7-7V38.5a5.5,5.5,0,0,1-11,0V18a18,18,0,0,1,36,0Z"/>
        </g>
      </svg>
    </div>
  ) 
};

export default Logo;
