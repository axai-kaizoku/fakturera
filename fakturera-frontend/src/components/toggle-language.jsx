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
                lang: "en",
                translations: {
                  "login.title": "Login",
                },
                page: "login",
              }
            : {
                lang: "sv",
                translations: {
                  "login.title": "Logga in",
                },
                page: "login",
              }
        );
      }}
      // style={{ display: "flex", gap: "10px", alignItems: "center" }}
    >
      {language === "en" ? "Svenska" : "English"}
      <img src={language === "en" ? SWEDISH_FLAG : UK_FLAG} alt="language" width={20} height={15} />
    </button>
  );
};
