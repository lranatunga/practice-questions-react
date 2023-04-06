export default function Greeting (greeting){
    const time= new Date().getHours()
    if (time <12){
        greeting = 'Good morning!'
    }  else if(time < 18){
        greeting = 'Good afternoon!'
    }else{
        greeting = 'Good evening'
    }
    return(
        <div>
           {greeting}
        </div>
    )
}











/**
 * 01 Display a greeting based on the time of day:
 * 
 * Use the JavaScript Date object to determine the current hour.
 * Conditionally render a greeting message based on the time of day (e.g., "Good morning," 
 * Good afternoon," or "Good evening") in a JSX element.
 * 
 */