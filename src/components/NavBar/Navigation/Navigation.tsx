import React, { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import NavItem from '../Navigation/NavItem/NavItem';

interface NavigationProps {
  navState?: boolean;
  setTransition: Function;
}

const Navigation: React.FC<NavigationProps> = ({navState, setTransition}) => {

  let [state, setState] = useState(navState);

  return (
    <div className={`${styles.Navigation__container}`}>
      {/* TODO set closed nav state on selection or click out */}
      <ul className={`${styles.Navigation} ${(navState ? styles.Navigation_open : '')}`}>
        <NavItem title="home" destination="" setTransition={setTransition} />
        <NavItem title="projects" destination="projects" setTransition={setTransition} />
        <NavItem title="extras" destination="extras" setTransition={setTransition} />
        {/* <NavItem title="extras" destination="extras" onClick={() => {
          setTransition('transition');
          setState(!state);
        }} /> */}
      </ul>
    </div>
  )
};

export default Navigation;
