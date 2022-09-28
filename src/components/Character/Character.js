import './Character.css';

export default function Character({ head, middle, bottom }) {
  return (
    <div className="character">
      <img src={`./character/${head}-head.png`}></img>
      <img src={`./character/${middle}-middle.png`}></img>
      <img src={`./character/${bottom}-pants.png`}></img>
    </div>
  );
}