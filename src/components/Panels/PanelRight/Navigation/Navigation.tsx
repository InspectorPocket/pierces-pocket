import React from 'react';
import Icon from '../../../Icon/Icon';
import styles from './Navigation.module.scss';
import NavItem from './NavItem/NavItem';

const Navigation: React.FC = () => (
  <ul className={styles.Navigation}>
    <NavItem title="projects" />
  </ul>
);

export default Navigation;
