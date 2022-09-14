import React, { useEffect, useState } from 'react';
import styles from './Intro.module.scss';

interface IntroProps {
  page: string;
  scrollable?: boolean;
}

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// const root = ReactDOM.createRoot(document.getElementById('root')); 
// // Try changing to isLoggedIn={true}:
// root.render(<Greeting isLoggedIn={false} />);

const Intro: React.FC<IntroProps> = ({page, scrollable}) => {

  return (
    // set state based on input from parent page
    <div className={styles.intro}>
      { page === 'home' &&
        <h1 className={`${styles.intro__heading}`}>Pierce<br/>Woods</h1>
      }
      { page === 'projects' &&
      <div className={`${styles.intro__heading}`}>
        <span className={`${styles.intro__subtext} ${styles.intro__subtext_left}`}>here be</span>
        <span className={`${styles.intro__subtext} ${styles.intro__subtext_right}`}>my</span>
        <h1>Projects</h1>
      </div>
      }
      { page === 'extras' &&
        <h1 className={`${styles.intro__heading}`}>Extras</h1>
      }
    </div>
  )
};

export default Intro;
