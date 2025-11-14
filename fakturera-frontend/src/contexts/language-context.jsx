import { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext({
  lang: "en",
  translations: {
    "login.title": "Login",
  },
  page: "login",
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({
    lang: "en",
    translations: {
      "login.title": "Login",
    },
    page: "login",
  });

  const t = (key, defaultValue) => {
    return translations.translations[key] || defaultValue;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, setTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};
