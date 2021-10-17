import React from 'react';
import styles from './PanelRight.module.scss';

import panel from '../Panel/Panel.module.scss';
import Icon from '../../Icon/Icon';

const PanelRight: React.FC = () => (
  <div className={`${panel.panel} ${styles.PanelRight}`}>
    <Icon/>
  </div>
);

export default PanelRight;
