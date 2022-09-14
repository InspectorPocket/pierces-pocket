import React from 'react';
import Icon from '../../../Icon/Icon';
import styles from './Navigation.module.scss';
import NavItem from './NavItem/NavItem';

interface NavigationProps {
  navState?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({navState}) => {
  
  return (
    <div className={`${styles.Navigation__container}`}>
      {/* TODO set closed nav state on selection or click out */}
      <ul className={`${styles.Navigation} ${(navState ? styles.Navigation_open : '')}`}>
        <NavItem title="projects" />
        <NavItem title="extras" />
      </ul>
    </div>
  )
};

export default Navigation;
