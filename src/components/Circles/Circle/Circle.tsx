import React, { FC } from 'react';
import { serialize } from 'v8';
import styles from './Circle.module.scss';

interface CircleProps {
  opacity?: string;
  width?: string;
  height?: string;
  transform?: string;
  colour?: string;
  top?: string
}

const Circle: FC<CircleProps> = ({opacity, transform, colour, top, width, height}) => {

  return (
    <span className={styles.Circle} style={{
      backgroundColor: colour,
      opacity: opacity,
      width: width,
      height: height,
      top: top,
      transform: transform
    }}></span>

    // <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"
    //   className={styles.Circle}>
    //   <circle id="Ellipse_257" data-name="Ellipse 257" cx="150" cy="150" r="150" fill={colour ? colour : '#fafafa'}/>
    // </svg>
  )
  
};

export default Circle;
