import React from 'react';
import styles from './Panel.module.scss';
import helpers from '../../../sass/_abstracts/_helpers.module.scss';

interface PanelProps {
  height?: number;
}

const Panel: React.FC<PanelProps> = (height) => {

  let heightClass: string = 'h_100';

  if (height.height) {
    heightClass = `h_${height.height}`;
  }
  
  return (
    <span className={`${styles.panel} ${height && helpers.heightClass}`}></span>
  )
};

export default Panel;
