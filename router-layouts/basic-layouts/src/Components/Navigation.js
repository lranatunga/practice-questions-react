import {NavLink} from 'react-router-dom'

function Navigation (){
    return(
        <nav>
            <NavLink 
                    to='/'
                    style={({isActive}) =>{
                    return{
                        color: isActive ? 'blue' : 'gray'
                    }
                    }}>Home</NavLink>
            <NavLink 
                    to='/about'
                    style={({isActive}) =>{
                        return{
                            color: isActive ? 'blue' : 'gray'
                        }
                        }}
                    >About</NavLink>
            <NavLink 
                    to='/contact'
                    style={({isActive}) =>{
                        return{
                            color: isActive ? 'blue' : 'gray'
                        }
                        }}
                    >Contact</NavLink>
        </nav>
    )
}
export default Navigation