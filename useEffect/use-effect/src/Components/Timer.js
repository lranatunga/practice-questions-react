import { useEffect, useState } from "react";

export function Timer (){
    const [timer, setTimer] = useState (0);
    const [isRunTime, setIsRunTime] = useState (false);

    useEffect (() =>{
        let interval = 0
        if (isRunTime){
            interval = setInterval (() => {
                setTimer (timer => timer + 1)
            } , 1000)
        } else if(!isRunTime && timer !== 0){
            clearInterval(interval)

        }
        return () => clearInterval(interval)
          
        
    },  [ isRunTime, timer])


    function changeStartPause (){
        setIsRunTime(!isRunTime)
    }
    function handleReset () {
         setTimer(0);
         setIsRunTime (false)
    }

    return (
        <div>
            <p>{timer}</p>
            <button onClick={changeStartPause}>{isRunTime ? 'Pause' : 'Start'}</button>
            <button onClick={handleReset}>Restart</button>
        </div>
    )
}














/**
 * 04 - Timer
 * Create a timer application that allows the user to start, pause, and reset the timer. 
 * Use the useState hook to manage the timer state, including the current time and the timer status 
 * (running or paused). 
 * Update the timer display as the time changes.
 * Use the useEffect hook to update the time
 * 
 */