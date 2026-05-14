import React, { useState } from "react";

function QuotesGenerator() {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "You learn more from failure than from success.",
    "It's not whether you get knocked down, it's whether you get up.",
    "If you are working on something exciting, it will keep you motivated."
  ];

  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h2>Random Quote Generator</h2>
      <button onClick={generateQuote}>Generate Quote</button>
      <p style={{ marginTop: "20px", fontStyle: "italic", fontSize: "18px" }}>
        {quote}
      </p>
    </div>
  );
}

export default QuotesGenerator;