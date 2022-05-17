import React, { FC } from 'react';
import styles from './Intro.module.scss';

interface IntroProps {}

const Intro: FC<IntroProps> = () => (
  <div className={styles.Intro}>
    Intro Component
  </div>
);

export default Intro;
