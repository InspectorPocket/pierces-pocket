import React, { FC } from 'react';
import styles from './Extras.module.scss';

interface ExtrasProps {}

const Extras: FC<ExtrasProps> = () => (
  <div className={styles.Extras}>
    Extras Component
  </div>
);

export default Extras;
