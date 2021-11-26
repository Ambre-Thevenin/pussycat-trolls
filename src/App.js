import React, {useState} from 'react';
import { Routes, Link, Route, useParams } from 'react-router-dom';

import Game from './components/Game';
import Home from './components/Home';
import End from './components/End';

import styles from './App.module.css';
import Logo from './assets/logodiag.png';
import Footer from './assets/Footer.png';
import Queen from './assets/queen.png';



function App() {
  const [ score, setScore ] = useState(0);
  const [ total, setTotal ] = useState(0);
  let { id } = useParams();

  return (


  <div className={styles.mainContainer}>
    <nav>
      <Link to={'/'}>
        <img src={Logo} alt="test aveugle logo" className={styles.logo} />
      </Link>
    </nav>
    <img src={Queen} alt="portrait of Queen Elizabeth" className={styles.queen} />
    <div className={styles.score}>
      <p className={styles.scoreTitle}>Score :</p>
      <p className={styles.scoreNumbers}>{score} / {total}</p>
    </div>
      <div className={styles.background}></div>
      <div className={styles.tv1}>
      <div className={styles.screen1}>
        <div className={styles.glass1}>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path ='/:id' element={<Game num={id} setScore={setScore} score={score} setTotal={setTotal} total={total}/>}></Route>
          <Route exact path='/End' element={<End />}></Route>
        </Routes>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.panel}>
          <div className={styles.dial}>
            <div className={styles.handle}></div>
            </div>
            <div className={styles.acdc}>AD&bull;DC</div>
            <div className={styles.dial}>
            <div className={styles.handle}></div>
            </div>
            <div className={styles.knobLabels}>
              <span>BRIGHT</span>
              <span>ON VOL</span>
            </div>
          </div>
          <div className={styles.knobs}>
            <div className={styles.knob}></div>
            <div className={styles.knob}></div>
          </div>
          <div className={styles.speaker}>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
          </div>
        </div>
      <div className={styles.legs}></div>
      <img src={Footer} alt="message with love" className={styles.footer} />
    </div>
  </div>

);
  }

export default App;
