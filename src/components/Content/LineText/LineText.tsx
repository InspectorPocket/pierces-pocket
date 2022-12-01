import React, { FC } from 'react';
import styles from './LineText.module.scss';
import '../../../sass/_layout/_mg_pd.scss';

interface LineTextProps {
  font?: string;
  content?: string;
  spacing?: boolean;
}

const LineText: FC<LineTextProps> = ({font, content, spacing}) => {
  return (

    <div className={`${styles.LineText} ${spacing === false ? styles.LineText_noSpace : ''}`}>
      { font === 'p' && <p dangerouslySetInnerHTML={{__html: content!
                    .split('\n').join('<br>') || ''}} /> }
      { font === 'h5' && <h5>{content}</h5> }
    </div>

  )
};

export default LineText;
