import React, { useState } from 'react';
import Timer from './timer';
import styles from './timer.module.css';

export default function TimerButton({missed}) {
const [startTimer] = useState(true);
return (
<div className={styles.timer} >
          {startTimer  && <Timer missed = {missed}/>}          
</div>
)
}