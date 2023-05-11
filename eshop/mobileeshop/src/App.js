import Header from './Components/Header';
import './App.css';
import { CardContainer } from "./Components/CardContainer";
import { useState } from 'react';
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ContactUs from './Pages/ContactUs';
import AddNewProducts from './Pages/AddNewProducts';



export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <BrowserRouter>
    <div className="App">
      <Header count={cartCount} />
      <Routes>
        <Route path='/' element={<Home  onAddToCart={() => setCartCount(cartCount + 1)}/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/addproduct' element={<AddNewProducts/>}/>
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

