import { useState } from "react"
function CounterState () {
    let [counter, setCounter] = useState (0)


    return (
        <div>
            Counter: {counter}
        <button 
            style={{padding: '10px', margin:'10px'}} 
            onClick={() => setCounter (counter += 1)}>
                Add
        </button>
        <button 
            style={{padding: '10px', margin:'10px'}} 
            onClick={() => setCounter (counter -= 1)}>
                Decrease
        </button>
       
        
        </div>
    )
}

export default CounterState;








/**
 * 01 Basic Counter
 * 
 * Create a simple counter application that has two buttons: 
 * one to increment and another to decrement the count. 
 * Use the useState hook to manage the count state.
 * 
 */