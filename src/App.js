import styles from './App.module.css';

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.background}></div>
      <div className={styles.tv1}>
        <div className={styles.antennas}>
          <div className={styles.left}>
          <div className={styles.tip}></div>
        </div>
      </div>
      <div className={styles.screen1}>
        <div className={styles.glass1}>
          <iframe title='screen' allowfullscreen='' height='410' scrolling='no' src='' width='100%'></iframe>
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
    </div>
  </div>
);
}

export default App;
