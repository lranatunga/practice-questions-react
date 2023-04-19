import Header from './Components/Header';
import './App.css';
import { CardContainer } from "./Components/CardContainer";
import { useState } from 'react';
import { data } from './01-eshop-data';




function App() {

const [cartCount, setCartCount] = useState(0)



  return (
    <div className="App">
     <Header count={cartCount}/>
     <CardContainer onAddToCart={() => setCartCount(cartCount + 1)}
                    title = {'Best Sellers'}  />
     <CardContainer onAddToCart={() => setCartCount(cartCount + 1)}
                    title = {'Most Popular'} />
     <CardContainer title='All Products'
                    onAddToCart={() => setCartCount(cartCount + 1)}
                     />

    </div>
  );
}

export default App;


// key = {props.id}
// id={props.id}
// name= {props.name}
// image = {props.image}
// description={props.descr}
// price= {props.price}
// rating = {props.rating}  
// onAddToCart={props.onAddToCart}