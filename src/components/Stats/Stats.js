export default function Stats({ headCount, middleCount, bottomCount, catchphrases }) {

  return (
    <div id="stats">
      <p>You have changed the head {headCount} times, the middle {middleCount} times, and the legs {bottomCount} times.</p>
      <h5>Your character&apos;s catchphrases:</h5>
      <ul>
        {catchphrases.map((catchphrase) => <li key={catchphrase}>{catchphrase}</li>)}
      </ul>
    </div>
  );
}