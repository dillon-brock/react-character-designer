import './Controls.css';

export default function Controls({
  head,
  setHead,
  middle,
  setMiddle,
  bottom,
  setBottom,
  setHeadCount,
  setMiddleCount,
  setBottomCount
}) {

  const handleChangeHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevCount) => prevCount + 1);
  };

  const handleChangeMiddle = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevCount) => prevCount + 1);
  };

  const handleChangeBottom = (e) => {
    setBottom(e.target.value);
    setBottomCount((prevCount => prevCount + 1));
  };

  return (
    <div className="controls">
      <label>
        HEAD
        <select value={head} onChange={handleChangeHead}>
          <option value="bird">bird</option>
          <option value="dog">dog</option>
          <option value="duck">duck</option>
          <option value="horse">horse</option>
        </select>
      </label>
      <label>
      MIDDLE
        <select value={middle} onChange={handleChangeMiddle}>
          <option value="blue">blue</option>
          <option value="dress">dress</option>
          <option value="pink">pink</option>
          <option value="red">red</option>
        </select>
      </label>
      <label>
      BOTTOM
        <select value={bottom} onChange={handleChangeBottom}>
          <option value="leg">leg</option>
          <option value="blue">blue</option>
          <option value="dog">dog</option>
          <option value="white">white</option>
        </select>
      </label>
    </div>
  );
}