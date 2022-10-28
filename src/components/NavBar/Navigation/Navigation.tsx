import React, { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import panelWidth from '../../../sass/_foundation/_panelWidth.module.scss'

import NavItem from '../Navigation/NavItem/NavItem';
import Panel from '../../Panels/Panel/Panel';

interface NavigationProps {
  navState?: boolean;
  setTransition: Function;
  closeMenu: Function;
}

const Navigation: React.FC<NavigationProps> = ({navState, setTransition, closeMenu}) => {

  let [state, setState] = useState('nav');

  return (
    <div className={`${styles.Navigation__container}`}>
      {/* TODO set closed nav state on selection or click out */}
      <ul className={`${styles.Navigation} ${(navState ? styles.Navigation_open : '')}`}>
        <NavItem title="projects" destination="projects" setTransition={setTransition} closeMenu={closeMenu} />
        <NavItem title="about" destination="about" setTransition={setTransition} closeMenu={closeMenu} />
        <NavItem title="extras" destination="extras" setTransition={setTransition} closeMenu={closeMenu} />
        {/* <NavItem title="extras" destination="extras" onClick={() => {
          setTransition('transition');
          setState(!state);
        }} /> */}
      </ul>
      <div className={`${styles.panels} ${panelWidth.panelWidth_x2}`}>
        <Panel panelState={navState ? 'nav-open' : 'nav'} />
        <Panel panelState={navState ? 'nav-open' : 'nav'} />
      </div>
    </div>
  )
};

export default Navigation;
