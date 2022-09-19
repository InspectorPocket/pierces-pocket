import React from 'react';
import styles from './Loading.module.scss';

import Circle from '../Circles/Circle/Circle'

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {

return (
  <div className={styles.Loading}>
    
    <Circle opacity="0.05" size="85vw" />
    <Circle opacity="0.1" size="70vw" />
    <Circle opacity="0.15" size="55vw" />
    <Circle opacity="0.2" size="40vw" />
    <Circle opacity="0.25" size="25vw" />
    <Circle opacity="0.45" size="10vw" />

  </div>
)

};

export default Loading;
