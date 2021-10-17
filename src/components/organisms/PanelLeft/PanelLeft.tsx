import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import Panel from '../../atoms/Panel/Panel';
import styles from './PanelLeft.module.scss';

const PanelLeft: React.FC = () => (
  <div className={styles.PanelLeft}>
    <Logo/>
  </div>
);

export default PanelLeft;
