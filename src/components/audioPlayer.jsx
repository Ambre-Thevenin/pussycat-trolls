import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function StartAudio() {
//   const api_deezer = 'XXXX';
  const [song, setSong] = useState('');

  useEffect(() => {
    axios.get(`https://api.deezer.com/track/3135557`).then((res) => {
        setSong(res.data);
    })
  }, []);

  useEffect(() => {
    if (song) {
      console.log(song);
    }
  }, [song]);

    return (
      <div>
        <StartAudio />
      </div>
    );
  }