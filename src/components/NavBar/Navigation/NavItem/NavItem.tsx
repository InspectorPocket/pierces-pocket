import React, {useState} from 'react';
import styles from './NavItem.module.scss';
import { Link } from 'react-router-dom';

interface NavItemProps {
  title: string;
  destination: string;
}

const NavItem: React.FC<NavItemProps> = ({title, destination}) => {

  return (
    <li className={styles.NavItem}>
      {/* TODO Set navbar to closed on click */}
      <Link to={`/${destination}`}>{title}</Link>
    </li>
  )
};

export default NavItem;
