import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // Convert Celsius to Fahrenheit
  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);
    if (c === "") {
      setFahrenheit("");
    } else {
      const f = (parseFloat(c) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  // Convert Fahrenheit to Celsius
  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    if (f === "") {
      setCelsius("");
    } else {
      const c = ((parseFloat(f) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  };

  // Boiling check
  const boilingCheck = () => {
    if (celsius !== "" && parseFloat(celsius) >= 100) {
      return " Water will boil!";
    } else if (celsius !== "") {
      return " Water will not boil.";
    } else {
      return "";
    }
  };

  return (
    <div>
      <h2>Temperature Converter 🌡️</h2>
      <div style={{ margin: "15px 0" }}>
        <input
          type="number"
          placeholder="Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          style={{ padding: "5px" }}
        />
      </div>
      <p>{boilingCheck()}</p>
    </div>
  );
}

export default TemperatureConverter;