import './Main.css';

import { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Stats from '../Stats/Stats';
import CatchphraseForm from '../CatchphraseForm/CatchphraseForm';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [catchphrases, setCatchphrases] = useState([]);

  return (
    <main>
      <h1>Character Designer</h1>
      <div id="container">
        <div id="left">
          <Controls
            head={head}
            setHead={setHead}
            middle={middle}
            setMiddle={setMiddle}
            bottom={bottom}
            setBottom={setBottom}
            setHeadCount={setHeadCount}
            setMiddleCount={setMiddleCount}
            setBottomCount={setBottomCount}/>
          <CatchphraseForm catchphrases={catchphrases} setCatchphrases={setCatchphrases}/>
          <Stats
            headCount={headCount}
            middleCount={middleCount}
            bottomCount={bottomCount}
            catchphrases={catchphrases}/>
        </div>
        <div id="right">
          <Character
            head={head} 
            middle={middle}
            bottom={bottom}/>
        </div>

      </div>
    </main>
  );
}