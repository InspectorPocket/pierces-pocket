import React, { FC } from 'react';
import styles from './CardText.module.scss';

interface CardTextProps {}

const CardText: FC<CardTextProps> = () => (
  <div className={styles.CardText}>
    CardText Component
  </div>
);

export default CardText;
