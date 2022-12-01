import React from 'react';
import styles from './Video.module.scss';

interface VideoProps {
  id: string | undefined;
  src: string | undefined;
  title: string | undefined;
  type: string | undefined;
}

const Video: React.FC<VideoProps> = ({src, title, type, id}) => {
  return (
    <div className={styles.Video}>
      { type === 'iframe' &&
        <iframe width="1920" height="1080" src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      }
      { type === 'video' &&
        <video width="1920" height="1080" controls>
          <source src={`/images/${id}/${src}`} type="video/mp4"/>
          {/* <source src="movie.ogg" type="video/ogg" /> */}
          Your browser does not support the video tag.
        </video>
      }
    </div>
  )
};

export default Video;
