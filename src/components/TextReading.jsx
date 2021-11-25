import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import {quizzSongs} from './bddSongs';


function TextReading({lyrics}) {
    // const [ textToRead, setTextToRead ] = useState('');
    // const [lyrics, setLyrics]= useState(quizzSongs[0].lyricsFR);

    // eslint-disable-next-line react-hooks/exhaustive-deps

    const text = `http://api.voicerss.org/?key=8323b70fb56e44d08c26b7057b4cec57&hl=fr-fr&src=${lyrics}`;

    return (
        <div>
            <h1>Test Audio</h1>
            <ReactAudioPlayer src={text} autoPlay controls />
        </div>
    )

}

export default TextReading;
