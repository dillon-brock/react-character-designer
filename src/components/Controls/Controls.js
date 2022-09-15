export default function Controls({ head, setHead }) {
  return (
    <label>
      HEAD
      <select value={head} onChange={(e) => {
        setHead(e.target.value);
      }}>
        <option value="bird">bird</option>
        <option value="dog">dog</option>
        <option value="duck">duck</option>
        <option value="horse">horse</option>
      </select>
    </label>
  );
}