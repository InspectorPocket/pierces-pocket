import React from 'react';
import Panel from '../../atoms/Panel/Panel';
import PanelLeft from '../PanelLeft/PanelLeft';
import styles from './Panels.module.scss';

const Panels: React.FC = () => (
  <div className={styles.Panels}>
    <PanelLeft/>
    {/* <Panel/> */}
    <Panel/>
    <Panel/>
    <Panel/>
    <Panel/>
  </div>
);

export default Panels;
