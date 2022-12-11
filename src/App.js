import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Animal Guessing Game</h2>
        <div>Get points by clicking on an image but don't click on any more than once!</div>
        <p></p>
        <Game />
      </header>
    </div>
  );
}

export default App;
