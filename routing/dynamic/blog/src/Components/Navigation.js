import { NavLink } from "react-router-dom";

function Navigation ( ) { 
    return (
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to="/blog">Blog</NavLink>
           
        </nav>
    )
}
export default Navigation