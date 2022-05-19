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

const Intro: React.FC<IntroProps> = () => {

  const scrollable: boolean = true;
  const page: string = 'projects';

  return (
    // set state based on input from parent page
    <div className={styles.intro}>
      { page === 'home' &&
        <h1 className={styles.intro__heading}>pierce's pocket</h1>
      }
      { page === 'projects' &&
        <h1 className={styles.intro__heading}>projects</h1>
      }
      { scrollable &&
        <p className={styles.scroll}>scroll</p>
      }
    </div>
  )
};

export default Intro;
