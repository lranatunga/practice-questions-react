import {NavLink} from 'react-router-dom'
import { TheamContext } from './Theam'
import { useContext } from 'react'


function Header () {
  const {darkmode} = useContext(TheamContext)
    return(
        <>
        <nav className={darkmode ? 'dark' : ''} style={{backgroundColor:darkmode}}>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>  
        </nav>
        
        </>    
    )
}
export default Header