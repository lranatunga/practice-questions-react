import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import FetchData from './Components/FetchData';
import MousePosition from './Components/MousePosition';
import LocalStorage from './Components/InputLocalStorage';

function App() {
  return (
    <div className="App">
      <LocalStorage/>
      <MousePosition/>
    <Counter/>
    <FetchData/>
    </div>
  );
}

export default App;
