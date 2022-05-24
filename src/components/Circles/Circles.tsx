import React, { FC } from 'react';
import Circle from './Circle/Circle';
import styles from './Circles.module.scss';

interface CirclesProps {}

const Circles: FC<CirclesProps> = () => {

  return (
    <div className={styles.Circles}>
      <Circle />
      <Circle />
    </div>
  )
};

export default Circles;
