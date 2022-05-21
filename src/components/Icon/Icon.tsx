import styles from './Icon.module.scss';

interface NavItemProps {
  icon: string;
  iconIndex: number;
  onClick: any;
  styling: boolean;
}

const Icon: React.FC<NavItemProps> = ({icon, iconIndex, styling, onClick}) => {
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
  
  iconSelector(icon, iconIndex);

  return (
    <a href='#' className={styles.Icon} onClick={onClick}>
      { icon != 'menu' && <img src={outputIcon} alt="" /> }
      { icon == 'menu' &&
        <div className={`${styles.Icon__menu} ${(styling ? styles.Icon__menu_focus : '')}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      }
    </a>
  );
}

export default Icon;
