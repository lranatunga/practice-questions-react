import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import FetchData from './Components/FetchData';
import MousePosition from './Components/MousePosition';

function App() {
  return (
    <div className="App">
      <MousePosition/>
    <Counter/>
    <FetchData/>
    </div>
  );
}

export default App;
