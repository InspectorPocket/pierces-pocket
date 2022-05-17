import React from 'react';
import Icon from '../../../Icon/Icon';
import styles from './Navigation.module.scss';
import NavItem from './NavItem/NavItem';

const Navigation: React.FC = () => (
  <div className={styles.Navigation}>
    {/* <Icon/> */}
    <NavItem/>
  </div>
);

export default Navigation;
