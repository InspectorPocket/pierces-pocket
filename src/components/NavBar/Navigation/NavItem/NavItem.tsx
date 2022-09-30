import React, {useState} from 'react';
import styles from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router";

interface NavItemProps {
  title: string;
  destination: string;
  setTransition?: Function;
  closeMenu?: Function;
  homePage?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({title, destination, setTransition, closeMenu, homePage = false}) => {
  
  return (
    <li className={styles.NavItem}>
      <NavLink to={`/${destination}`} className={`${homePage ? styles.NavItem__home : styles.NavItem__link}`}
        exact activeClassName={`${homePage ? styles.NavItem__home_selected : styles.NavItem__link_selected}`}
        onClick={() => {
          if (setTransition) setTransition(destination != '' ? 'transition' : 'close');
          if (closeMenu) closeMenu();
        }}
      >
        {title}
      </NavLink>
    </li>
  )
};

export default NavItem;
