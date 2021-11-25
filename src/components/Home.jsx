import React from "react";

import styles from './Home.module.css';
import Sound from '../assets/volume_up.svg'
import Play from '../assets/play_circle.svg'

function Home(){

return(
    <div>
        <h1 className={styles.HomeTitle}>Apprennez l'anglais ! </h1>
        <p className={styles.HomeText}>Améliorez votre anglais en vous entraînant grâce à notre jeu musical ! </p>
         <p className={styles.HomeText}>Attention, c'est un jeu sonore, mettez votre haut parleur ou votre casque audio. </p>
         <img src={Sound} alt="sound speaker" className={styles.HomeSoundSpeaker}/>

        <h2 className={styles.HomeH2}>Règles</h2>
        <ul>
            <li>Un extrait de chanson anglaise traduite en français vous sera proposé.</li>
            <li>Vous aurez 3 propositions de chansons.</li>
            <li>A vous de trouver la bonne réponse pour découvrir l'extrait vidéo correspondant ! </li>
        </ul>
        <button><img src={Play} alt="playbutton" className="HomePlayButton"/></button>
    </div>
)
};

export default Home; 