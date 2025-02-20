import React, { useState } from 'react'

function Counter(message) {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1 > {count} =</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count +5)}>Add 5</button>
    </div>
  )
}

export default Counter
