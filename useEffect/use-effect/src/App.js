
import { UserGreeting } from './Components/Greeting';
import './App.css';
import { Counter } from './Components/Counter';
import { CurrentTime } from './Components/Time';
import {Timer} from './Components/Timer';

function App() {
  return (
    <div className="App">
     <Counter />
     <UserGreeting />
     <CurrentTime />
     <Timer />
    </div>
  );
}

export default App;
