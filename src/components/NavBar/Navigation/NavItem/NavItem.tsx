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
      <NavLink
        to={`/${destination}`}
        className={({ isActive }) =>
          isActive ? `${homePage ? styles.NavItem__home : styles.NavItem__link} ${homePage ? styles.NavItem__home_selected : styles.NavItem__link_selected}` : `${homePage ? styles.NavItem__home : styles.NavItem__link}`
        }
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
