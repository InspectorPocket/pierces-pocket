import React from 'react';
import styles from './CardText.module.scss';

interface CardTextProps {
  content: string;
  spacing?: number;
  colour?: string;
}

const CardText: React.FC<CardTextProps> = ({spacing, content, colour}) => {
  return (

    <div className={`${styles.CardText} ${spacing ? `mg-t-${spacing} mg-b-${spacing}` : ''}`}
      style={{backgroundColor: colour ? colour : ''}}>
      <p>
        {content}
      </p>
    </div>

  )
};

export default CardText;
