import React, { useState, useEffect } from 'react';
import {quizzSongs} from './bddSongs';
import {useNavigate, useParams} from 'react-router-dom';


function Game({setScore, score}) {
    let navigate = useNavigate();
    let {id} = useParams();


    const [ song, setSong ] = useState(quizzSongs[id]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [ userChoice, setUserChoice ] = useState();
    const [ message, setMessage ] = useState('');
    

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
        navigate(`/${id+1}`);
        setSong(quizzSongs[id+1]);
    }


    return (
        <div>
            {isPlaying ? 
            <div>
                <h2>Quelle est cette chanson?</h2>
                <div onClick={()=>displayVideo(song.title)}><p>{song.title}</p></div>
                <div onClick={()=>displayVideo(song.wrongResponse1)}><p>{song.wrongResponse1}</p></div>
                <div onClick={()=>displayVideo(song.wrongResponse2)}><p>{song.wrongResponse2}</p></div></div> : 
                <div>
                    <h2>{message}</h2>
                    <iframe width="560" height="315" src={userChoice} title="YouTube video player" frameborder="0" allow="autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>}
            <button onClick={()=> goForward()}></button>
            </div>
    )
}
export default Game;
