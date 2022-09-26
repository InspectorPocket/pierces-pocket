import React from 'react';
import styles from './Navigation.module.scss';
import NavItem from '../Navigation/NavItem/NavItem';

interface NavigationProps {
  navState?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({navState}) => {

  return (
    <div className={`${styles.Navigation__container}`}>
      {/* TODO set closed nav state on selection or click out */}
      <ul className={`${styles.Navigation} ${(navState ? styles.Navigation_open : '')}`}>
        <NavItem title="home" destination="" />
        <NavItem title="projects" destination="projects" />
        <NavItem title="extras" destination="extras" />
      </ul>
    </div>
  )
};

export default Navigation;
