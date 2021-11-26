import React, { useState } from 'react';
import Timer from './timer';
import styles from './timer.module.css';
// import Skip from '../assets/skip_next.svg';

export default function TimerButton() {
const [startTimer] = useState(true);
return (
<div className={styles.timer} >
          {startTimer  && <Timer />}          
          {/* <button className={styles.gameButton} onClick={() => setStartTimer((prevState) => !prevState)}><img alt="skip" src={Skip} /> {startTimer}</button> */}
</div>
)
}