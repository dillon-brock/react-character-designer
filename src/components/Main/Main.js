import { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';

export default function Main() {
  const [head, setHead] = useState('bird');

  return (
    <main>
      <Controls head={head} setHead={setHead} />
      <Character head={head} />
    </main>
  );
}