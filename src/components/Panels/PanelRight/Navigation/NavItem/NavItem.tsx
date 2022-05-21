import React, {useState} from 'react';
import styles from './NavItem.module.scss';
import { Link } from 'react-router-dom';


interface NavItemProps {
  title: string;
}


const NavItem: React.FC<NavItemProps> = ({title}) => {

  return (
    <li className={styles.NavItem}>
      <Link to={`/${title}`}>{title}</Link>
    </li>
  )
};

export default NavItem;
