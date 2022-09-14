import React, { useEffect, useState } from 'react';
import styles from './Intro.module.scss';

interface IntroProps {
  page: string;
  scrollable: boolean;
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
        <h1 className={`${styles.intro__heading} ${styles.intro__heading_top}`}>pierce's pocket</h1>
      }
      { page === 'projects' &&
      <div>
        <span className={`${styles.intro__subtext} ${styles.intro__subtext_left}`}>take a look</span>
        <span className={`${styles.intro__subtext} ${styles.intro__subtext_right}`}>at my</span>
        <h1 className={`${styles.intro__heading} ${styles.intro__heading_centered}`}>projects</h1>
      </div>
      }
      { scrollable &&
        <p className={styles.scroll}>scroll</p>
      }
    </div>
  )
};

export default Intro;
