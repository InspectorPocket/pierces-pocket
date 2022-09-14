import React, { FC } from 'react';
import Circle from './Circle/Circle';
import styles from './Circles.module.scss';

interface CirclesProps {}

const Circles: FC<CirclesProps> = () => {

  return (
    <div className={styles.Circles}>
      {/* <Circle opacity="0.05" size="560px" position="translateX(0)" />
      <Circle opacity="0.1" size="490px" position="translateX(0)" />
      <Circle opacity="0.15" size="420px" position="translateX(0)" />
      <Circle opacity="0.2" size="356px" position="translateX(0)" />
      <Circle opacity="0.25" size="288px" position="translateX(0)" />
      <Circle opacity="0.3" size="216px" position="translateX(0)" />
      <Circle opacity="0.35" size="158px" position="translateX(0)" />
      <Circle opacity="0.4" size="96px" position="translateX(0)" />
      <Circle opacity="0.45" size="40px" position="translateX(0)" /> */}
      <Circle opacity="0.05" size="90vh" position="translateX(-190px)" />
      <Circle opacity="0.1" size="78vh" position="translateX(-170px)" />
      <Circle opacity="0.15" size="66vh" position="translateX(-148px)" />
      <Circle opacity="0.2" size="55vh" position="translateX(-126px)" />
      <Circle opacity="0.25" size="45vh" position="translateX(-100px)" />
      <Circle opacity="0.3" size="34vh" position="translateX(-68px)" />
      <Circle opacity="0.35" size="24vh" position="translateX(-40px)" />
      <Circle opacity="0.4" size="16vh" position="translateX(-20px)" />
      <Circle opacity="0.45" size="8vh" position="translateX(0)" />
    </div>
  )
};

export default Circles;
