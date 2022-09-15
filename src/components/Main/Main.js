import { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');

  return (
    <main>
      <Controls head={head}
        setHead={setHead}
        middle={middle}
        setMiddle={setMiddle} />
      <Character head={head} 
        middle={middle}/>
    </main>
  );
}