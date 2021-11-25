import React, { useState } from 'react';
import {quizzSongs} from './bddSongs';


function TextReading() {
    const [textToRead, setTextToRead] = useState('');
    const [lyrics, setLyrics]= useState(quizzSongs[0].lyricsFR);

    // eslint-disable-next-line react-hooks/exhaustive-deps

    const text = `http://api.voicerss.org/?key=8323b70fb56e44d08c26b7057b4cec57&hl=fr-fr&src=${lyrics}`;

    return (
        <div>
            <h1>Test Audio</h1>
            <audio controls autoplay>
            <source src={text} type="audio/wav" />
                Can't touch this
            </audio>

        </div>
    )

}

export default TextReading;
