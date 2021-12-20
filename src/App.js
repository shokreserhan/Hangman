import logo from './logo.svg';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letter from './components/Letter';
import Letters from './components/Letters';

function App() {
  return (
    <div>
    <Score /><Solution />

  <Letters><Letter></Letter><Letter></Letter>
    .... //Eventually we will display all the available letters here: A - Z
  </Letters>
  </div>
  );
}

export default App;
