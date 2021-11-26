import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import styles from './TextReading.module.css';

function TextReading({lyrics}) {
  
    const text = `http://api.voicerss.org/?key=8323b70fb56e44d08c26b7057b4cec57&hl=fr-fr&src=${lyrics}`;

    return (
        <div className={styles.ReactAudioPlayerDiv}>
            <h1 className={styles.TextReadingH1}>Test Audio</h1>
            <ReactAudioPlayer src={text} autoPlay controls className={styles.ReactAudioPlayer}/>
        </div>
    )

}

export default TextReading;
