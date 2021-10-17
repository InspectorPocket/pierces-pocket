import React from 'react';
import Logo from '../../Logo/Logo';
import Panel from '../Panel/Panel';
import panel from '../Panel/Panel.module.scss';
import styles from './PanelLeft.module.scss';

const PanelLeft: React.FC = () => (
  <div className={`${panel.panel} ${styles.PanelLeft}`}>
    <Logo/>
  </div>
);

export default PanelLeft;
