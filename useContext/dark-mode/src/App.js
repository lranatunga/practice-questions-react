import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main'
import {BrowserRouter} from 'react-router-dom'



function App() {

  return (

   <BrowserRouter>
 
   
    <Header/>
    <Main/>
   
    </BrowserRouter>
    
  );
}

export default App;
