export default function UserInfo(props) {
    
    return(
       < div className="user-info"> 
        <h3>Name:<span> {props.name}</span>  <span>Age: {props.age}</span></h3>
       </div>
    )
}
















/**
 * 01 Display User Information
 * 
 * Create a component called UserInfo that accepts two props, name and age. 
 * The component should display the user's name and age in an appropriate format. 
 * In the parent component, use the UserInfo component and pass different sets of user 
 * information to create multiple instances.
 * 
 */