const UserTable = () => {
    const user = [
        {name: 'Rex', email:'rex@abs.com', age:24},
        {name: 'Jhone', email:'jhone@abs.com', age:34},
        {name: 'Peter', email:'peter@abs.com', age:28}
    ];
    
    return(
       <table className="user-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {user.map((user, index) => (
                    <tr key ={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
                )
                )}
            </tbody>
       </table>
    )
}


export {UserTable}







/**
 * 02 Displaying a Table of Users
 * 
 * Create a new functional component called "UserTable" in a file named "UserTable.js".
 * Inside the component, create a static array of user objects, each with properties "name",
 * "email", and "age".
 * Use the "map" function to iterate over the array, rendering a table row (<tr>) with table
 * data cells (<td>) for each user's properties.
 * Import and use the UserTable component in your "App.js" file.
 * 
 */