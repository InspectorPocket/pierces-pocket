import React, {useState} from 'react';
import styles from './NavItem.module.scss';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";

interface NavItemProps {
  title: string;
  destination: string;
}

const NavItem: React.FC<NavItemProps> = ({title, destination}) => {

  // if path === destination -> set active
  let [active, setActive] = useState(window.location.pathname);

  console.log(active);
  

  return (
    <li className={`${styles.NavItem} ${active ? styles.NavItem_selected : ''}`}>
      <Link to={`/${destination}`}>{title}</Link>
    </li>
  )
};

export default NavItem;
