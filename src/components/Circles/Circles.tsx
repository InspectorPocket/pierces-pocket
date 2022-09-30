import React, { FC } from 'react';
import Circle from './Circle/Circle';
import styles from './Circles.module.scss';
import colours from '../../sass/_foundation/_colours.module.scss';

interface CirclesProps {}

const Circles: FC<CirclesProps> = () => {

  let backgroundColour: string = colours.darker;

  function hexToRGB(hex: string, alpha: number) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

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
