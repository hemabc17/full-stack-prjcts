import { useState } from "react";

function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Simple Counter</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default SimpleCounter;