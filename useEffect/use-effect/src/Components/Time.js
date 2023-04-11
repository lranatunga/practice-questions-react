

/**
 * 03
 * 
 * Add the missing part in the following code that displays the current time and updates it every second.
 * 
 */

import { useState, useEffect } from 'react';

export function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Add useEffect here to update the current time every second
    useEffect (() => {
        const timeInterval =setInterval( () => {
          setCurrentTime((new Date(Date.now()).toLocaleTimeString()),1000)
          return () => clearInterval(timeInterval)
        })
        
    })

  return (
    <div>
      <p>Current Time: {currentTime}</p>
    </div>
  );
}