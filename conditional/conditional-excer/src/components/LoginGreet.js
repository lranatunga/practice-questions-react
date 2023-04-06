export default function GreetLogin ({isLoggedIn}){
    return (
        <p>
            {isLoggedIn ? 'Welcome back!' : 'Please sign in!'}
        </p>
        
    )
}











/**
 * 05 Conditional Rendering Based on Props
 * 
 * Create a component called Greeting that accepts a prop called isLoggedIn. 
 * The component should display "Welcome back!" if the user is logged in 
 * (i.e., isLoggedIn is true) and "Please sign in." if the user is not logged in 
 * (i.e., isLoggedIn is false). 
 * In the parent component, use the Greeting component to display both greetings 
 * based on different isLoggedIn values.
 * 
 */