import React from 'react';
import './App.css';
import CounterState from './components/Counter';
import TempertatureConverter from './components/Temperature';
import TodoList from './components/TodoList';
import ColourPicker from './components/Colorpicker';
import DarkModeToggle from './components/DarkMode';

function App() {
  return (
    <div className="App">
     <CounterState />
     <TempertatureConverter/>
     <TodoList />
     <ColourPicker />
     <DarkModeToggle />
    </div>
  );
}

export default App;
