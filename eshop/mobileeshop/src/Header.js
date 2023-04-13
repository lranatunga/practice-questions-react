import {BsCartFill} from 'react-icons/bs'
import logo from './images/mologo.png'
import MenuItems from './MenuItems'
import Search from './Search.js'

export default function Header (){
    return(
        <div style={{display:'flex', backgroundColor:'skyblue', width:'100%', height:"100px", justifyContent:'center'}}>
        <img src={logo} alt="logo" style={{width:'100px', height:'75px', objectFit:'cover', margin:'15px'}}/>
        <MenuItems />
        <Search />
        <BsCartFill style={{width:'50px', height:'50px', scale:(0.8), padding:'20px'}} />
        </div>
    )

}



// 2. Build a header for the eshop. It should contain:
//    1. a company logo
//    2. 4 menu items (Home, Categories, Deals, Contact)
//    3. an input search box along with a button
//    4. a cart icon along with the number of products inside it. Default value is 0