import React, { FC } from 'react';
import styles from './Circle.module.scss';

interface CircleProps {}

const Circle: FC<CircleProps> = () => {

  return (
    <span className={styles.Circle}></span>
  )
  
};

export default Circle;
