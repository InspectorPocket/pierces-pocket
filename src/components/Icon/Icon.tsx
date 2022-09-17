import styles from './Icon.module.scss';
import colours from '../../sass/_foundation/_colours.module.scss';

interface NavItemProps {
  icon: string;
  iconIndex: number;
  onClick?: any;
  styling?: boolean;
  projectNumber?: any;
}

const Icon: React.FC<NavItemProps> = ({icon, iconIndex, styling, onClick, projectNumber}) => {
  // object array? assign id with value. pass in value as icon and assign id
  const availableIcons = [
    'icon'
  ];
  
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
        <div className={`${styles.Icon__menu} ${(styling ? styles.Icon__menu_focus : '')}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      }
      { icon == 'projects' &&
        <div className={`${styles.Icon__projects} ${(styling ? styles.Icon__projects_focus : '')}`}>
          {/* show bg colour on icon related to project index currently selected */}
          <span style={{backgroundColor: iconColour}}></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      }
    </a>
  );
}

export default Icon;
