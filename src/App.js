import './App.css';
import Main from './components/Main/Main';
import background from './grass.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Main />
    </div>
  );
}

export default App;
