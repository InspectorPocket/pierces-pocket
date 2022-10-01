import React from 'react';
import styles from './Loading.module.scss';

import Circle from '../Circles/Circle/Circle'

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {

return (
  <div className={styles.Loading}>
    
    <Circle opacity="0.05" width="85vw" height="85vw" />
    <Circle opacity="0.1" width="70vw" height="70vw" />
    <Circle opacity="0.15" width="55vw" height="55vw" />
    <Circle opacity="0.2" width="40vw" height="40vw" />
    <Circle opacity="0.25" width="25vw" height="25vw" />
    <Circle opacity="0.45" width="10vw" height="10vw" />

  </div>
)

};

export default Loading;
