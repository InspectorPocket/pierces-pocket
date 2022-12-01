import React, { FC } from 'react';
import styles from './Paragraph.module.scss';

interface ParagraphProps {}

const Paragraph: FC<ParagraphProps> = () => (
  <div className={styles.Paragraph}>
    Paragraph Component
  </div>
);

export default Paragraph;
