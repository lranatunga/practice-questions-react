import {Link } from "react-router-dom";

function Navigation () {

    return(
        <nav>
            <Link to = '/'
            >Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
        </nav>
    )
}
export default Navigation