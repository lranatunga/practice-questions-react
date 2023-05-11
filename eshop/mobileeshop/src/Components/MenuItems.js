export default function MenuItems (){
    return (
        <ul style={{listStyle:'none', gap:'20px', display:'flex', justifyContent:'center'}}>
            <a className="menu" href='/'>Home</a> 
            <a className="menu" href="">Categories</a> 
            <a className="menu" href="">Deals</a> 
            <a className="menu" href="/contact">Contact</a>
            <a className="menu" href="/addproduct">Add New Product</a>
            
        </ul>
    )
}
