import React from "react";

function ClickCounter({ count, increment }) {
  return (
    <div>
      <h3>Click Counter</h3>
      <button onClick={increment}>Clicked {count} times</button>
    </div>
  );
}

export default ClickCounter;