import React from 'react';
import styles from './PanelRight.module.scss';

import panel from '../Panel/Panel.module.scss';
// import Icon from '../../Icon/Icon';
import Navigation from './Navigation/Navigation';

const PanelRight: React.FC = () => (
  <div className={`${panel.panel} ${styles.PanelRight}`}>
    <Navigation/>
  </div>
);

export default PanelRight;
