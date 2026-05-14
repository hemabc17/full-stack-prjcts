import React from "react";
import Counter from "./Counter";

function ClickCounterRP() {
  return (
    <Counter>
      {(count, increment) => (
        <div>
          <h3>Click Counter (Render Props)</h3>
          <button onClick={increment}>Clicked {count} times</button>
        </div>
      )}
    </Counter>
  );
}

export default ClickCounterRP;