

/**
 * 01
 * In the following code add the missing code so when the button is being clicked then
 * the document title gets updated when the counter gets updated.
 * 
 */

import { useState, useEffect } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  // Add useEffect here to update the document title with the current count
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Count: {count}</p>
    </div>
  );
}