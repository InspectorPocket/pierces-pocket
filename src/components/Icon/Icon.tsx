import styles from './Icon.module.scss';
import colours from '../../sass/_foundation/_colours.module.scss';

interface NavItemProps {
  icon: string;
  iconIndex: number;
  onClick?: any;
  active?: boolean;
  projectsNumber?: any;
  currentProject?: number;
}

const Icon: React.FC<NavItemProps> = ({icon, iconIndex, active, onClick, projectsNumber, currentProject}) => {
  // object array? assign id with value. pass in value as icon and assign id
  const availableIcons = [
    'icon'
  ];
  
  console.log(active);
  
  let outputIcon = '';

  function iconSelector(icon:string, index: number) {
    if (icon != 'menu') {
      outputIcon = availableIcons[0];
    } else {
      outputIcon = 'menu';
    }
  }

  let iconColour: string = colours.dark;
  
  iconSelector(icon, iconIndex);

  return (
    <a className={styles.Icon} onClick={onClick}>
      { icon != 'menu' && icon != 'projects' && <img src={outputIcon} alt="" /> }
      { icon == 'menu' &&
        <div className={`${styles.Icon__menu} ${(active ? styles.Icon__menu_focus : '')}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      }
      { icon == 'projects' &&
        <div className={`${styles.Icon__grid} ${((projectsNumber == 1) ? styles.Icon__grid_big : '')} ${((projectsNumber >= 6) ? styles.Icon__grid_small : '')} ${(active ? styles.Icon__grid_active : '')}`}>
          {/* TODO replace with for loop and pass through class data to 1 span */}
          <span className={currentProject === 1 ? styles.Icon__grid_active_span : ''}></span>
          { projectsNumber > 1 &&
            <span className={(currentProject === 2) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 2 &&
            <span className={(currentProject === 3) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 3 &&
            <span className={(currentProject === 4) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 4 &&
            <span className={(currentProject === 5) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 5 &&
            <span className={(currentProject === 6) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 6 &&
            <span className={(currentProject === 7) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 7 &&
            <span className={(currentProject === 8) ? styles.Icon__grid_active_span : ''}></span>
          }
          { projectsNumber > 8 &&
            <span className={(currentProject === 9) ? styles.Icon__grid_active_span : ''}></span>
          }
        </div>
      }
    </a>
  );
}

export default Icon;
