import { SWEDISH_FLAG, UK_FLAG } from "../consts/index.js";
import { useLanguage } from "../hooks/use-language";

export const ToggleLanguage = () => {
  const { language, setLanguage, setTranslations } = useLanguage();
  // console.log(language);

  return (
    <button
      onClick={() => {
        setLanguage((prev) => {
          if (prev === "en") return "sv";
          else return "en";
        });
        setTranslations(
          language === "en"
            ? {
                lang: "sv",
                login: {
                  title: "Logga in",
                },
                page: "login",
              }
            : {
                lang: "en",
                login: {
                  title: "Login",
                },
                page: "login",
              }
        );
      }}
      // style={{ display: "flex", gap: "10px", alignItems: "center" }}
    >
      {language === "en" ? "English" : "Svenska"}
      <img src={language === "en" ? UK_FLAG : SWEDISH_FLAG} alt="language" width={20} height={15} />
    </button>
  );
};
