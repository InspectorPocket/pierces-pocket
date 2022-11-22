import React from 'react';
import styles from './Video.module.scss';

interface VideoProps {
  src: string | undefined;
  title: string | undefined;
  type: string | undefined;
}

const Video: React.FC<VideoProps> = ({src, title, type}) => {
  return (
    <div className={styles.Video}>
      { type === 'iframe' &&
        <iframe width="1920" height="1080" src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      }
      { type === 'video' &&
        <video src={src}></video>
      }
    </div>
  )
};

export default Video;
