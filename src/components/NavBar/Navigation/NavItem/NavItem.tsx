import React, {useState} from 'react';
import styles from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router";

interface NavItemProps {
  title: string;
  destination: string;
  setTransition: Function;
  closeMenu: Function;
}

const NavItem: React.FC<NavItemProps> = ({title, destination, setTransition, closeMenu}) => {
  
  return (
    <li className={styles.NavItem}>
      <NavLink to={`/${destination}`} className={styles.NavItem__link}
        exact activeClassName={styles.NavItem_selected}
        onClick={() => {
          setTransition(destination != '' ? 'transition' : 'close');
          closeMenu();
        }}
      >
        {title}
      </NavLink>
    </li>
  )
};

export default NavItem;
