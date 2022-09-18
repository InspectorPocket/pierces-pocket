import React from 'react';
import styles from './CardText.module.scss';

interface CardTextProps {
  content: string;
  spacing?: number;
}

const CardText: React.FC<CardTextProps> = ({spacing, content}) => {
  return (

    <div className={`${styles.CardText} ${spacing ? `mg-t-${spacing} mg-b-${spacing}` : ''}`}>
      <p>
        {content}
      </p>
    </div>

  )
};

export default CardText;
