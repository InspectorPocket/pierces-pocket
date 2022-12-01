import React from 'react';
import styles from './CardText.module.scss';
import colours from '../../../sass/_foundation/_colours.module.scss';

interface CardTextProps {
  content: string;
  spacing?: number;
  colour?: string;
}

const CardText: React.FC<CardTextProps> = ({spacing, content, colour}) => {
  return (

    <div className={`cardText ${styles.CardText} ${colour && colour === colours.grey2 ? styles.CardText_grey2 : ''}`}>
      <p>
        {content}
      </p>
    </div>

  )
};

export default CardText;
