export default function Controls({ head, setHead, middle, setMiddle, bottom, setBottom }) {
  return (
    <div className="controls">
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
      <label>
      MIDDLE
        <select value={middle} onChange={(e) => {
          setMiddle(e.target.value);
        }}>
          <option value="blue">blue</option>
          <option value="dress">dress</option>
          <option value="pink">pink</option>
          <option value="red">red</option>
        </select>
      </label>
      <label>
      BOTTOM
        <select value={bottom} onChange={(e) => {
          setBottom(e.target.value);
        }}>
          <option value="leg">leg</option>
          <option value="blue">blue</option>
          <option value="dog">dog</option>
          <option value="white">white</option>
        </select>
      </label>
    </div>
  );
}