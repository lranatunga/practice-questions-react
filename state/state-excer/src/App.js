import React from 'react';
import './App.css';
import CounterState from './components/Counter';
import TempertatureConverter from './components/Temperature';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <CounterState />
     <TempertatureConverter/>
     <TodoList />
    </div>
  );
}

export default App;
