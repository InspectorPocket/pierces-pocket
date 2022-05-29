import React, { FC } from 'react';
import Circle from './Circle/Circle';
import styles from './Circles.module.scss';

interface CirclesProps {}

const Circles: FC<CirclesProps> = () => {

  return (
    // TODO Darken colours instead of opacity
    <div className={styles.Circles}>
      <Circle opacity="0.05" size="360px" />
      <Circle opacity="0.1" size="300px" />
      <Circle opacity="0.15" size="260px" />
      <Circle opacity="0.2" size="230px" />
      <Circle opacity="0.25" size="190px" />
      <Circle opacity="0.3" size="150px" />
      <Circle opacity="0.35" size="120px" />
      <Circle opacity="0.4" size="85px" />
      <Circle opacity="0.45" size="50px" />
      <Circle opacity=".8" size="25px" />
    </div>
  )
};

export default Circles;
