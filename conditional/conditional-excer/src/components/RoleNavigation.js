export default function RoleNavigation ({role}){
    return (
        <nav>
        {role === 'admin'?
        <ul>
            <a href='/settings'>Settings</a>
            <a href='/users'>Users</a>
        </ul> :
        <ul>
            <a href='/profile'>Profile</a>
        </ul>
        }
        </nav>
    )
}










/**
 * 03 Role-based Navigation:
 * 
 * Create a component called RoleNavigation that accepts a prop called role (String). 
 * The component should display a set of navigation links based on the user's role 
 * (either "admin" or "user").
 * 
 */