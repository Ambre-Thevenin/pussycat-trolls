import React from 'react';

import Home from './components/Home'

import styles from './App.module.css';
import Logo from './assets/logodiag.png';
import Footer from './assets/Footer.png';

function App() {
  return (
  
  <div className={styles.mainContainer}>
    <img src={Logo} alt="test aveugle logo" className={styles.logo} />
      <div className={styles.background}></div>
      <div className={styles.tv1}>
      <div className={styles.screen1}>
        <div className={styles.glass1}>
        <Home />
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.panel}>
          <div className={styles.dial}>
            <div className={styles.handle}></div>
            </div>
            <div className={styles.acdc}>AD&bull;DC</div>
            <div className={styles.dial}>
            <div className={styles.handle}></div>
            </div>
            <div className={styles.knobLabels}>
              <span>BRIGHT</span>
              <span>ON VOL</span>
            </div>
          </div>
          <div className={styles.knobs}>
            <div className={styles.knob}></div>
            <div className={styles.knob}></div>
          </div>
          <div className={styles.speaker}>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
          </div>
        </div>
      <div className={styles.legs}></div>
      <img src={Footer} alt="message with love" className={styles.footer} />
    </div>
  </div>
);
}

export default App;
