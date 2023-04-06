import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import ToggleText from './components/ToggleText';
import RoleNavigation from './components/RoleNavigation';
import UserList from './components/UserList';
import GreetLogin from './components/LoginGreet';


function App() {

  const displayText = true
  let users = []
  
  // let users = [
  //   {
  //     name:'John',
  //     userName: 'johnmax'
  //   },

  //   {
  //     name:'Kate',
  //     userName: 'katewilson'
  //   },

  //   {
  //     name:'Bob',
  //     userName: 'bobnov'
  //   },

  //   {
  //    name:'Jack',
  //    userName: 'jack123'
  //   }
  // ]

  

  return (
    <div className="App">
    <Greeting />
    { displayText === true? <ToggleText />: null}
    <RoleNavigation role='user' />
    <RoleNavigation role ='admin'/>
    <UserList users={users}/>
    <GreetLogin isLoggedIn={true}/>
    <GreetLogin isLoggedIn={false}/>
    <GreetLogin isLoggedIn={true}/>
    <GreetLogin isLoggedIn={false}/>
    </div>
  );
}

export default App;
