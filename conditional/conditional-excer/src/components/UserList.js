export default function UserList({users}){
    return(
        <div>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) =>(<li key={user}>{user.userName}</li>))}
                </ul>
            ) :
            (<p>
                No users found!
            </p>)
            }
        </div>
    )
}










/**
 * 04 Display User List:
 * 
 * Create a component called UserList that accepts a prop called users (Array of objects). 
 * The component should display a list of user names if there are users, and display 
 * "No users found" if the array is empty.
 * 
 */