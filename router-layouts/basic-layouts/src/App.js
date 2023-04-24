import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Layout from './Layout';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home'
import About from './Components/About'

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path= '/contact' element={<Contact/>}/>
      </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
