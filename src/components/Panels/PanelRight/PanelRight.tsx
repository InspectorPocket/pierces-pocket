import React, {useState} from 'react';
import styles from './PanelRight.module.scss';

import panel from '../Panel/Panel.module.scss';
import Icon from '../../Icon/Icon';
import Navigation from './Navigation/Navigation';

const PanelRight: React.FC = () => {

  const [navOpen, setOpen] = useState(false);
  const [menuFocus, setMenuFocus] = useState(false);

  return (
    <div className={`${panel.panel} ${styles.PanelRight}`}>
      <Icon icon="menu" iconIndex={0} styling={(menuFocus)} onClick={() => {
        setOpen(!navOpen);
        setMenuFocus(!menuFocus);
        // Add focus class to icon
      }} />
      {navOpen && <Navigation />}
    </div>
  )
  
};

export default PanelRight;
