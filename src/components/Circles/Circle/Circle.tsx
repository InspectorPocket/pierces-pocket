import React, { FC } from 'react';
import { serialize } from 'v8';
import styles from './Circle.module.scss';

interface CircleProps {
  opacity?: string;
  size?: string;
  position?: string;
}

const Circle: FC<CircleProps> = ({opacity, size, position}) => {

  return (
    <span className={styles.Circle} style={{
      opacity: opacity,
      width: size,
      height: size,
      transform: position
    }}></span>
  )
  
};

export default Circle;
