

import React, { useState, useEffect } from 'react';

export function UserGreeting() {
  const [greeting, setGreeting] = useState('');

  // Add useEffect here to determine the appropriate greeting based on the user's local time
  useEffect(() => {
    const time = new Date().getHours();
  

    if(time <12){
      setGreeting ('Good Morning')
    } else if (time < 18){
      setGreeting ('Good Afternoon')
    }else{
      setGreeting('Good Evening')
    }
  }, [greeting])

  return (
    <div>
      <h1>{greeting}, User!</h1>
    </div>
  );
}

/**
 * 02
 * 
 * Add the missing part in the following code that displays a greeting message based on the user's local time (morning, afternoon, or evening).
 */