import React from "react";
import {useNavigate} from 'react-router-dom';

import styles from './Home.module.css';
import Sound from '../assets/volume_up.png';
import Play from '../assets/play_pink.png';

function Home(){

    let navigate = useNavigate();

    function playGame(){
        navigate("/0");
    }
return(
    <div>
        <h1 className={styles.HomeTitle}>Apprenez l'anglais ! </h1>
        <p className={styles.HomeText}>Améliorez votre anglais en vous entraînant grâce à notre jeu musical ! </p>
         <p className={styles.HomeText}>Attention, c'est un jeu sonore : activez votre haut parleur ou votre casque audio. </p>
         <img src={Sound} alt="sound speaker" className={styles.HomeSoundSpeaker}/>

        <h2 className={styles.HomeH2}>Règles</h2>
        <ul>
            <li className={styles.HomeLi}><span className={styles.HomeSpan}>Un extrait de chanson anglaise traduite en français vous sera proposé.</span></li>
            <li className={styles.HomeLi}><span className={styles.HomeSpan}>Vous aurez 3 propositions de chansons.</span></li>
            <li className={styles.HomeLi}><span className={styles.HomeSpan}>A vous de trouver la bonne réponse pour découvrir l'extrait vidéo correspondant ! </span></li>
        </ul>
        <button onClick={playGame} className={styles.HomePlayButton}><img src={Play} alt="playbutton" className={styles.HomePlayImg}/></button>
    </div>
)
};

export default Home; 