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
      <span className={`${navBG.Navigation__cover} ${(navOpen ? navBG.Navigation__cover_open : '')}`}
        onClick={() => {
          setOpen(false);
          setMenuFocus(false);
        }}></span>
      
      <Logo setTransition={setTransition} closeMenu={closeMenu} trackMenuHide={trackMenuHide} />

      <div className={`${styles.NavBar__menu} ${navBG.Navigation__bg} ${(navOpen ? navBG.Navigation__bg_open : '')} ${panelWidth.panelWidth}`}>
        <Icon icon="menu" active={(menuFocus)} onClick={() => {
          setOpen(!navOpen);
          setMenuFocus(!menuFocus);
        }} />
        {/* {navOpen && <Navigation />} */}
        <Navigation navState={(navOpen)} setTransition={setTransition} closeMenu={closeMenu} />
      </div>
    </div>
  )

};

export default NavBar;
