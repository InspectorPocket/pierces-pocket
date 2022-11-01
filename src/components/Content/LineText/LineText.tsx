import React, { FC } from 'react';
import styles from './LineText.module.scss';
import '../../../sass/_layout/_mg_pd.scss';

interface LineTextProps {
  font?: string;
  content?: string;
  spacing?: number;
}

const LineText: FC<LineTextProps> = ({font, content, spacing}) => {
  return (

    <div className={`${styles.LineText}`}>
      { font === 'p' && <p>{content}</p> }
      { font === 'h5' && <h5>{content}</h5> }
    </div>

  )
};

export default LineText;
