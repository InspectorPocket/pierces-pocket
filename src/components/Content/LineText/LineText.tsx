import React, { FC } from 'react';
import styles from './LineText.module.scss';

interface LineTextProps {
  font: "p" | "h5";
  content: string;
}

const LineText: FC<LineTextProps> = ({font, content}) => {
  return (

    <div className={styles.LineText}>
      { font === 'p' &&
        // <h1 className={`${styles.intro__heading}`}>${content}</h1>
        <p>{content}</p>
      }
      { font === 'h5' &&
        <h5>{content}</h5>
      }
    </div>

  )
};

export default LineText;
