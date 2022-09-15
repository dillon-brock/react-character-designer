import { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');

  return (
    <main>
      <Controls
        head={head}
        setHead={setHead}
        middle={middle}
        setMiddle={setMiddle}
        bottom={bottom}
        setBottom={setBottom}/>
      <Character
        head={head} 
        middle={middle}
        bottom={bottom}/>
    </main>
  );
}