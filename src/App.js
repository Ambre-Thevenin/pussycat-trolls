import React, {useState} from 'react';
import { Routes, BrowserRouter, Route, useParams } from 'react-router-dom';

import './App.css';
// import TextReading from './components/TextReading';
import Game from './components/TestAth'


function App() {
  const [ score, setScore ] = useState(0);
  let { id } = useParams();

  return (
    <BrowserRouter>
        <Routes>
          <Route path ='/:id' element={<Game num={id} setScore={setScore} score={score}/>}></Route>
          
        </Routes>
          <div className="App">
           {/* <Game setScore={setScore} score={score} /> */}
           <p>Score : {score}</p>
          </div>
    </BrowserRouter>
  );
}

export default App;


{/* <Route path="/:id" element={<Game songId={quizzSongs[id]} />} /> */}


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/XqZsoesa55w?start=27" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}