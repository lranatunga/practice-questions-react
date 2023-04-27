import logo from './logo.svg';
import './App.css';
import CounterContextFunction from './CounterContext';
import Counters from './Counters'

function App() {
  return (
    <CounterContextFunction>
      <Counters />
    </CounterContextFunction>
  );
}

export default App;
