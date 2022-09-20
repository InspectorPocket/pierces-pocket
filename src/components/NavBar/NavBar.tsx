import React, {FC, useState} from 'react';
import styles from './NavBar.module.scss';
import Logo from "../Logo/Logo";
import Icon from "../Icon/Icon";
import Navigation from "./Navigation/Navigation";
import navBG from '../NavBar/Navigation/Navigation.module.scss';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {

  const [navOpen, setOpen] = useState(false);
  const [menuFocus, setMenuFocus] = useState(false);

  return (
    <div className={styles.NavBar}>
      <Logo />

      <div className={`${styles.NavBar__menu} ${navBG.Navigation__bg} ${(navOpen ? navBG.Navigation__bg_open : '')}`}>
        <Icon icon="menu" iconIndex={0} active={(menuFocus)} onClick={() => {
          setOpen(!navOpen);
          setMenuFocus(!menuFocus);
        }} />
        {/* {navOpen && <Navigation />} */}
        <Navigation navState={(navOpen)} />
      </div>
    </div>
  )

};

export default NavBar;
