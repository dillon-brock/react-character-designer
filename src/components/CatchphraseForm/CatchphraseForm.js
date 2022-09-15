import { useState } from 'react';

export default function CatchphraseForm({ catchphrases, setCatchphrases }) {
  const [currentCatchphrase, setCurrentCatchphrase] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCatchphrases([...catchphrases, currentCatchphrase]);
    setCurrentCatchphrase('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add A Catchphrase
        <input type="textarea" value={currentCatchphrase} onChange={(e) => {
          setCurrentCatchphrase(e.target.value);
        }}></input>
      </label>
      <button>Add Catchphrase</button>
    </form>
  );
}