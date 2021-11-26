import React, { useState, useEffect } from 'react';
import {quizzSongs} from './bddSongs';
import {useNavigate, useParams} from 'react-router-dom';
import TextReading from './TextReading';
import TimerButton from './timerButton'
import styles from './Game.module.css';


function Game({ setScore, score , num, total, setTotal}) {
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
            setTotal(total +1);
            if (choice === song.title) {
               setUserChoice(song.goodVideo);
               setMessage('Bon jeu ! (good game)')
               setScore(score +1);
                }
    
            else {
                setUserChoice(song.wrongVideo);
                setMessage('Perdu... Mais voici une chanson pour vous consoler !');
                }
        }

    function goForward() {
        setSongID(parseInt(id)+1)
    }

    const responses = [song.title, song.wrongResponse1, song.wrongResponse2]
    const shuffleResponses = responses.sort(()=> Math.random() - 0.5);
    // const [startTimer] = useState(true);
    return (
        <div>
            {isPlaying && song ? 
            <div>
                <TimerButton />  
                <TextReading lyrics={song.lyricsFR} className={styles.TestAthTextReading}/>
                <h2 className={styles.TestAthH2}>Quelle est cette chanson?</h2>
                <div onClick={()=>displayVideo(shuffleResponses[0])}><p className={styles.TestAthTextSong}>{shuffleResponses[0]}</p></div>
                <div onClick={()=>displayVideo(shuffleResponses[1])}><p className={styles.TestAthTextSong}>{shuffleResponses[1]}</p></div>
                <div onClick={()=>displayVideo(shuffleResponses[2])}><p className={styles.TestAthTextSong}>{shuffleResponses[2]}</p></div>
                </div> : 
                <div>
                    <h2 className={styles.TestAthTextMessage}>{message}</h2>
                    <iframe width="560" height="315" src={userChoice} title="Dailymotion" frameborder="0" allow="autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className={styles.TestAthIFrame}></iframe>
                    <button onClick={goForward} className={styles.TestAthTextButtonSong}> Prochaine chanson </button>
                </div>
                }
            </div>
    )
}
export default Game;
