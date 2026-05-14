import React, { useState, useEffect } from "react";

function ClockApp() {
  const [time, setTime] = useState(new Date());
  const [language, setLanguage] = useState("en"); // "en" or "bn"

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  // Convert numbers to Bangla if needed
  const convertToBangla = (num) => {
    const bnDigits = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
    return num.toString().split("").map(d => bnDigits[d] || d).join("");
  };

  const hours = language === "en" ? time.getHours() : convertToBangla(time.getHours());
  const minutes = language === "en" ? time.getMinutes() : convertToBangla(time.getMinutes());
  const seconds = language === "en" ? time.getSeconds() : convertToBangla(time.getSeconds());

  return (
    <div>
      <h2>Clock App </h2>
      <p style={{ fontSize: "36px", margin: "20px 0" }}>
        {hours}:{minutes}:{seconds}
      </p>
      <button onClick={toggleLanguage}>
        Change Language ({language === "en" ? "Bangla" : "English"})
      </button>
    </div>
  );
}

export default ClockApp;