function Card (props){

    return(
        <div className="product-card"  style={{display:'flex', 
                                                flexDirection:'column',
                                                width:'400px', 
                                                height:'550px',
                                                margin:'20px',
                                                borderRadius:'10px',
                                                border:'1px solid gray'}}>
            <h5>{props.name}</h5>
            <img src={props.image} style={{width:'150px', height:'250px', objectFit:'cover', alignSelf:'center'}} alt=""/>
            <p>{props.description}</p>
            <p>Price : {props.price}</p>
            <p>Average Rating : {props.rating}</p>
            <button onClick={() => props.onAddToCart()} style={{padding:'10px', backgroundColor:'#758',color:'#fff', borderRadius:'10px', border:"1px solid #758"}}>Add To Cart</button>
        </div>
    )
}
export default Card








// 3. Build a product card. It should contain:
//    1.  Product name
//    2.  Product Image
//    3.  Product price
//    4.  Average Rating
//    5.  "add to cart" button
   
//    Once the button pressed the number at the cart icon at the header should increase by one.