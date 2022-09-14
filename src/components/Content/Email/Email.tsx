import React, { FC } from 'react';
import styles from './Email.module.scss';

interface EmailProps {
  point?: boolean;
  topSpace?: boolean;
}

const Email: FC<EmailProps> = ({point, topSpace}) => {
  
  return (
    <div className={`${styles.Email} ${(topSpace ? styles.Email_mgt_10 : '')}`}>
      { point === true &&
        <span></span>
      }
      <h6>piercespocket@gmail.com</h6>
    </div>
  )

};

export default Email;
