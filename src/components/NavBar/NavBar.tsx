import React, {FC, useState} from 'react';
import styles from './NavBar.module.scss';
import Logo from "../Logo/Logo";
import Icon from "../Icon/Icon";
import Navigation from "./Navigation/Navigation";
import navBG from '../NavBar/Navigation/Navigation.module.scss';
import panelWidth from '../../sass/_foundation/_panelWidth.module.scss';

interface NavBarProps {
  setTransition: Function;
  trackMenuHide?: boolean;
}

const NavBar: FC<NavBarProps> = ({setTransition, trackMenuHide}) => {

  const [navOpen, setOpen] = useState(false);
  const [menuFocus, setMenuFocus] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setMenuFocus(false);
  }
  
  return (
    <div className={styles.NavBar}>
      <Logo setTransition={setTransition} closeMenu={closeMenu} trackMenuHide={trackMenuHide} />
      {/* TODO New functionality to move the screen down to reveal the playground below */}
      <Icon icon="menu" active={(menuFocus)} onClick={() => {
        setOpen(!navOpen);
        setMenuFocus(!menuFocus);
      }} />
      {/* Deleted Navigation from here but look at older commits in reversion is needed */}
    </div>
  )

};

export default NavBar;
