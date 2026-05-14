import React from "react";

function HoverCounter({ count, increment }) {
  return (
    <div
      onMouseOver={increment}
      style={{
        border: "2px solid #4e73df",
        padding: "30px",
        marginTop: "20px",
        borderRadius: "10px",
        display: "inline-block",
        cursor: "pointer"
      }}
    >
      <h3>Hover Counter</h3>
      <p>Hovered {count} times</p>
      <p style={{ fontSize: "12px", color: "#666" }}>(Hover here)</p>
    </div>
  );
}

export default HoverCounter;