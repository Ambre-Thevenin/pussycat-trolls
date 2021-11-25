import React, { useState } from 'react';
import Timer from './timer';

export default function TimerButton() {
const [startTimer, setStartTimer] = useState(false);
return (
<div>
          {startTimer && <Timer />}
          <button onClick={() => setStartTimer((prevState) => !prevState)}>{startTimer ? `logo je sais ap` : `logo play qui va bien`}</button>
</div>
)
}