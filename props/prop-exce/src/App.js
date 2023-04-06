import React from 'react';
import './App.css';
import UserInfo from './componenets/UserInfo';
import Box from './componenets/Box';
import GroceryList from './componenets/GroceryList';
import {UserProfile} from './componenets/NestedComponents';
import ReadableDate from './componenets/expresion';

function App() {
  const groceryItems = ["Milk", "Eggs", "Bread", "Butter"];
  return (
    <div className="App">
     <UserInfo 
      name='Jhone'
      age='23'
       />

      <UserInfo 
      name='Bob'
      age='25'
       />  

      <Box 
      color="red"
      size="50px" 
      />

      <Box 
      color="blue"
      size="50px"
      />

      <Box 
      color="yellow"
      size="50px"
      />


      <GroceryList 
      groceries={groceryItems}/>

      <UserProfile 
        name = "John Rex"
        email = 'johnerex@gmail.com'
        street = 'Brighton Street'
        city="Purley"
        country= 'United Kingdom'
      />

      <ReadableDate />
    </div>
  );
}

export default App;
