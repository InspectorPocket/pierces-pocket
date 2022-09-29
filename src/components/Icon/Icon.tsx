import styles from './Icon.module.scss';
import colours from '../../sass/_foundation/_colours.module.scss';

interface NavItemProps {
  icon: string;
  noPadding?: boolean;
  onClick?: any;
  active?: boolean;
  projectsNumber?: any;
  currentProject?: number;
}

const Icon: React.FC<NavItemProps> = ({icon, noPadding, active, onClick, projectsNumber, currentProject}) => {

  const availableIcons: any = {
    react: 'react',
    xd: 'xd',
    ai: 'ai'
  };
  
  let outputIcon = '';

  function iconSelector(icon:string) {
    if (icon != 'menu' && icon != 'projects') {
      outputIcon = availableIcons[icon];
    }
  }
  
  iconSelector(icon);

  return (
    // TODO If link is true a tag else div
    <a className={`${styles.Icon} ${noPadding ? styles.Icon_no_pad : ''}`} onClick={onClick}>
      { icon != 'menu' && icon != 'projects' && <img src={'/images/icons/' + outputIcon + '.svg'} alt="" /> }
      { icon == 'menu' &&
        <div className={`${styles.Icon__menu} ${(active ? styles.Icon__menu_focus : '')}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      }
      { icon == 'projects' &&
        <div className={`${styles.Icon__grid} ${((projectsNumber == 1) ? styles.Icon__grid_big : '')} ${((projectsNumber >= 6) ? styles.Icon__grid_small : '')} ${(active ? styles.Icon__grid_active : '')}`}>
          {/* TODO replace with for loop OR switch statement, and pass through class data to 1 span */}
          <span className={currentProject === 0 ? styles.Icon__grid_active_span : ''}></span>
          { projectsNumber > 1 &&
            <span className={(currentProject === 1) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 2 &&
            <span className={(currentProject === 2) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 3 &&
            <span className={(currentProject === 3) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 4 &&
            <span className={(currentProject === 4) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 5 &&
            <span className={(currentProject === 5) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 6 &&
            <span className={(currentProject === 6) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 7 &&
            <span className={(currentProject === 7) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 8 &&
            <span className={(currentProject === 8) ? styles.Icon__grid_active_span : ''}></span>
          }
        </div>
      }
    </a>
  );
}

export default Icon;
