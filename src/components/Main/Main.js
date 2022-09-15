import './Main.css';

import { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Stats from '../Stats/Stats';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');
  const [headCount, setHeadCount] = useState(0);

  return (
    <main>
      <div id="left">
        <Controls
          head={head}
          setHead={setHead}
          middle={middle}
          setMiddle={setMiddle}
          bottom={bottom}
          setBottom={setBottom}
          setHeadCount={setHeadCount}/>
        <Stats
          headCount={headCount}/>
      </div>
      <div id="right">
        <Character
          head={head} 
          middle={middle}
          bottom={bottom}/>
      </div>
    </main>
  );
}