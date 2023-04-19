import Card from "./Card";
import {data} from '../01-eshop-data'

function CardContainer (props) {

   
    return (
        <div className="card-container" style={{display:'flex', flexDirection:'column'}}>
        <h2 style={{alignItems:'flex-start', alignSelf:'flex-start'}}>{props.title}</h2>
        <div style={{display:'flex', flexDirection:'row' , overflowX:'auto'}}>
       
       { data.map((props) => {
        return (
        
        <Card 
            key = {props.id}
            id={props.id}
            name= {props.name}
            image = {props.image}
            description={props.descr.substring(0,100)}
            price= {props.price}
            rating = {props.rating}  
            onAddToCart={props.onAddToCart} />
            )
            })}

        {/* {props.products.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              description={product.descr}
              price={product.price}
              rating={product.rating}
              onAddToCart={props.onAddToCart}
            />
          )
        })}          */}

        </div>
        </div>
    )
}

export {CardContainer}


// 4. Build a card container component. It should contain: 
//    1. a title at the top
//    2. product cards
//    The title should be rendered at the top left corner
//    If the products cover more than the page width then a horizontal scrollbar should be shown.


// 5. Using the card container component add to the home page a top selling products component with title "Best Sellers" 
// 6. Using the card container component add to the home page the most popular products (best average) with title "Most Popular" based on the average rating
// 7. Using the card container component add to the home page all products with title "All Products"
