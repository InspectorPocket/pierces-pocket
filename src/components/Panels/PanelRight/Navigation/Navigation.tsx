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
      {/* For loop through using json data */}
      <ul className={`${styles.Navigation} ${(navState ? styles.Navigation_open : '')}`}>
        <NavItem title="projects" />
        <NavItem title="extras" />
      </ul>
    </div>
  )
};

export default Navigation;
