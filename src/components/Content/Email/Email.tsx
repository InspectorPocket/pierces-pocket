import React, { FC } from 'react';
import styles from './Email.module.scss';

interface EmailProps {
  point?: boolean;
  topSpace?: boolean;
  leftSpace?: boolean;
}

const Email: FC<EmailProps> = ({point, topSpace, leftSpace}) => {
  
  return (
    <div className={`${styles.Email} ${(topSpace ? styles.Email_mgt_10 : '')} ${(leftSpace ? '' : styles.Email_mgl_none)}`}>
      { point === true &&
        <span></span>
      }
      <h6>piercespocket@gmail.com</h6>
    </div>
  )

};

export default Email;
