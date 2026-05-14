import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeChanger() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: theme === "light" ? "#f8f9fc" : "#2c2c2c",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 0.3s ease"
  };

  return (
    <div style={themeStyles}>
      <h2>Theme Changer</h2>
      <p>Current Theme: {theme}</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "8px 15px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#4e73df" : "#1cc88a",
          color: "#fff"
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default ThemeChanger;