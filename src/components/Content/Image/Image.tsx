import React from 'react';
import styles from './Image.module.scss';

interface ImageProps {
  src: string;
  alt: string;
  src2?: string;
  alt2?: string;
  margin?: string;
  width?: string;
  height?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, src2, alt2, margin, width, height }) => {
  return (
    <div className={styles.Image}>
      { src && !src2 &&
        <div className={`${styles.Image__one} ${margin}`}>
          <img src={`/images/${src}`} alt={alt} width={width} height={height} />
        </div>
      }
      { src && src2 &&
        <div className={`${styles.Image__two} ${margin}`}>
          <img src={`/images/${src}`} alt={alt} />
          <img src={`/images/${src2}`} alt={alt2} />
        </div>
      }
    </div>
  )
};

export default Image;
