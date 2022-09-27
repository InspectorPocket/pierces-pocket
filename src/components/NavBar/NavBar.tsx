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
        <Icon icon="menu" active={(menuFocus)} onClick={() => {
          setOpen(!navOpen);
          setMenuFocus(!menuFocus);
        }} />
        {/* {navOpen && <Navigation />} */}
        <Navigation navState={(navOpen)} />
      </div>

      {/* Grid Icon */}
      {/* { projects &&
        <div className={`${styles.projects__gridview} ${currentProject ? '' : styles.projects__gridview_hide}`}>

          <Icon icon="projects" 
            currentProject={currentProjectId}
            projectsNumber={loadedProjects.length}
            onClick={() => setHideProjectsMenu(!hideProjectsMenu)}
            active={hideProjectsMenu}
          />

        </div>
      } */}
    </div>
  )

};

export default NavBar;
