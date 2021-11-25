import React from "react";
import Sound from '../assets/volume_up.svg'

function Home(){

return(
    <div>
        <h1>Apprennez l'anglais ! </h1>
        <p>Améliorez votre anglais en vous entraînant grâce à notre jeu musical ! </p>
         <p>Attention, c'est un jeu sonore, mettez votre haut parleur ou votre casque audio. </p>
         <img src={Sound} alt="sound speaker" fill="red"/>

        <h2>Règles</h2>
        <ul>
            <li>Un extrait de chanson anglaise traduite en français vous sera proposé.</li>
            <li>Vous aurez 3 propositions de chansons.</li>
            <li>A vous de trouver la bonne réponse pour découvrir l'extrait vidéo correspondant ! </li>
        </ul>
        <button>PLAY</button>
    </div>
)
};

export default Home; 