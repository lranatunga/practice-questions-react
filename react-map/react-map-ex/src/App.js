import React from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import { UserTable } from './components/UserTable';
import RandomNumbers from './components/RandomNumbers';
import ColorBoxes from './components/ColorBoxes';
import { ImageGrid } from './components/ImageGrid';

function App() {
  return (
    <div className="App">
      <ShoppingList />
      <UserTable />
      <RandomNumbers/>
      <ColorBoxes />
      <ImageGrid />
    </div>
  );
}

export default App;
