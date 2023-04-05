export function UserAddress( props) {
    return(
        <div>
            <p>Street: {props.street}</p>
            <p>City: {props.city}</p>
            <p>Country: {props.country}</p>
        </div>
    )
}
export function UserProfile (props) {
return(
    <div>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <UserAddress street={props.street} city={props.city} country={props.country} />
    </div>
)
}













/**
 * 04 Nested Components with Props
 * 
 * Create three components called Parent, UserProfile and UserAddress. 
 * They are nested inside another like this:
 * 
 * Parent
 *   |--- UserProfile
 *          |-- UserAddress
 * 
 * 
 * The UserProfile component should accept two props, name and email, and the UserAddress
 * component should accept three props, street, city, and country. 
 * 
 * The UserProfile component should also render the UserAddress component by passing the
 * address props. 
 * In the parent component, use the UserProfile component to display user information,
 * including their address.
 * 
 */