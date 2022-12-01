import React, { FC } from 'react';
import Circle from './Circle/Circle';
import styles from './Circles.module.scss';
import colours from '../../sass/_foundation/_colours.module.scss';
import { hexToRGB } from '../../helpers/utils';

interface CirclesProps {}

const Circles: FC<CirclesProps> = () => {

  let backgroundColour: string = colours.darker;

  return (
    <div className={styles.Circles__wrapper}>
    
      <div className={styles.Circles}>
        <span className={`${styles.Circle} ${styles.Circle__1}`} style={{backgroundColor: hexToRGB(backgroundColour, 0.03)}}>
          <span className={`${styles.Circle} ${styles.Circle__2}`} style={{backgroundColor: hexToRGB(backgroundColour, 0.1)}}>
            <span className={`${styles.Circle} ${styles.Circle__3}`} style={{backgroundColor: hexToRGB(backgroundColour, 0.22)}}>
              <span className={`${styles.Circle} ${styles.Circle__4}`} style={{backgroundColor: hexToRGB(backgroundColour, 0.22)}}>
                <span className={`${styles.Circle} ${styles.Circle__5}`} style={{backgroundColor: hexToRGB(backgroundColour, 0.3)}}>
                  <span className={`${styles.Circle} ${styles.Circle__6}`} style={{backgroundColor: hexToRGB(backgroundColour, 0.35)}}>
                    <span className={`${styles.Circle} ${styles.Circle__7}`} style={{backgroundColor: hexToRGB(backgroundColour, 0.45)}}>
                      <span className={`${styles.Circle} ${styles.Circle__8}`} style={{backgroundColor: hexToRGB(backgroundColour, 0.5)}}>
                        <span className={`${styles.Circle} ${styles.Circle__9}`} style={{backgroundColor: hexToRGB(backgroundColour, 0.55)}}>
                          <span className={`${styles.Circle} ${styles.Circle__10}`} style={{backgroundColor: hexToRGB(backgroundColour, .9)}}>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </div>

    </div>
  )
};

export default Circles;
