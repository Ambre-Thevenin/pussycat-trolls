import React, { useState, useEffect } from 'react';
import {quizzSongs} from './bddSongs';
import {useNavigate, useParams} from 'react-router-dom';
import TextReading from './TextReading';


function Game({ setScore, score , num}) {
    let navigate = useNavigate();
    let { id } = useParams();

    const [songID, setSongID ] = useState(parseInt(id));
    const [ song, setSong ] = useState(quizzSongs[songID]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [ userChoice, setUserChoice ] = useState();
    const [ message, setMessage ] = useState('');
    

    useEffect(() => {
        if (songID < 13) {
        navigate(`/${songID}`)
        setIsPlaying(!isPlaying)
        setSong(quizzSongs[songID])
        }
        else {
            navigate('/end');
        }
    },[songID])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function displayVideo(choice) {
            setIsPlaying(!isPlaying);
            if (choice === song.title) {
               setUserChoice(song.goodVideo);
               setMessage('Bon jeu ! (good game)')
               setScore(score +1);
                }
    
            else {
                setUserChoice(song.wrongVideo);
                setMessage('Perdu...mais voici une chanson pour vous consoler');
                }
        }

    function goForward() {
        setSongID(parseInt(id)+1)
        console.log(songID);
    }


    return (
        <div>
            {isPlaying && song ? 
            <div>
                <TextReading lyrics={song.lyricsFR} />
                <h2>Quelle est cette chanson?</h2>
                <div onClick={()=>displayVideo(song.title)}><p>{song.title}</p></div>
                <div onClick={()=>displayVideo(song.wrongResponse1)}><p>{song.wrongResponse1}</p></div>
                <div onClick={()=>displayVideo(song.wrongResponse2)}><p>{song.wrongResponse2}</p></div></div> : 
                <div>
                    <h2>{message}</h2>
                    <iframe width="560" height="315" src={userChoice} title="Dailymotion" frameborder="0" allow="autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <button onClick={goForward}> Prochaine chanson </button>
                </div>
                }
            </div>
    )
}
export default Game;