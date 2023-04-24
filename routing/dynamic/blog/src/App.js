import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { BlogList } from "./Components/BlogList";
import { BlogPost } from "./Components/BlogPost";
import NotFound from "./Components/NotFound";
import Navigation from "./Components/Navigation";

function App() {
  return (
 <BrowserRouter>
<Navigation />

 <Routes>
  <Route exact path='/' element={<Home/>} />
  <Route exact path="/blog" element={<BlogList/>} />
        <Route path="/blog/:postId" component={<BlogPost/>} />
        <Route path="*" element={<NotFound/>} />
 </Routes>
 </BrowserRouter>
  );
}

export default App;
