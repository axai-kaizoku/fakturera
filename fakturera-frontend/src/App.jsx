import { useState } from "react";
import "./App.css";
import { SWEDISH_FLAG, UK_FLAG } from "./consts";

function App() {
  return (
    <div>
      <h1>Welcome to Fakturera</h1>
      <ToggleLanguage />
    </div>
  );
}

export default App;

export const ToggleLanguage = () => {
  const [language, setLanguage] = useState("english");
  return (
    <button
      onClick={() =>
        setLanguage((prev) => {
          if (prev === "english") return "swedish";
          else return "english";
        })
      }
      style={{ display: "flex", gap: "10px", alignItems: "center" }}
    >
      {language === "english" ? "Svenska" : "English"}
      <img src={language === "english" ? SWEDISH_FLAG : UK_FLAG} alt="language" width={40} height={40} />
    </button>
  );
};
