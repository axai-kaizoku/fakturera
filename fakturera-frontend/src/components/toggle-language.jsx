import { useState } from "react";
import { SWEDISH_FLAG, UK_FLAG } from "./consts";

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
