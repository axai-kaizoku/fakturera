import { SWEDISH_FLAG, UK_FLAG } from "../consts/index.js";
import { useLanguage } from "../hooks/use-language";

export const ToggleLanguage = () => {
  const { language, changeLanguage } = useLanguage();
  // console.log(language);

  return (
    <button
      onClick={() => {
        changeLanguage(language === "en" ? "sv" : "en");
      }}
      // style={{ display: "flex", gap: "10px", alignItems: "center" }}
    >
      {language === "en" ? "English" : "Svenska"}
      <img src={language === "en" ? UK_FLAG : SWEDISH_FLAG} alt="language" width={20} height={15} />
    </button>
  );
};
