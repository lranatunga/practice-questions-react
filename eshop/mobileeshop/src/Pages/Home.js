import { CardContainer } from "../Components/CardContainer";
// import { useState } from "react";

export default function Home (props){
    return(
    <CardContainer
        // onAddToCart={() => setCartCount(cartCount + 1)}
        onAddToCart={props.onAddToCart}
      
      />
    )
}

