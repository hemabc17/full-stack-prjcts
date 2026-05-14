import React from "react";
import Counter from "./Counter";

function HoverCounterRP() {
  return (
    <Counter>
      {(count, increment) => (
        <div
          onMouseOver={increment}
          style={{
            border: "2px solid #1cc88a",
            padding: "30px",
            marginTop: "20px",
            borderRadius: "10px",
            display: "inline-block",
            cursor: "pointer"
          }}
        >
          <h3>Hover Counter (Render Props)</h3>
          <p>Hovered {count} times</p>
          <p style={{ fontSize: "12px", color: "#666" }}>(Hover here)</p>
        </div>
      )}
    </Counter>
  );
}

export default HoverCounterRP;