import { createContext, useEffect, useState } from "react";
import { getTranslations } from "../api/translations";
import { useTranslationStore } from "../store";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});
  const cachedTranslations = useTranslationStore((store) => store.translation);
  const setCachedTranslations = useTranslationStore((store) => store.setTranslation);

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  const loadTranslations = async (language) => {
    if (language in cachedTranslations) {
      setTranslations(cachedTranslations[language]);
      return;
    }
    const data = await getTranslations(language);
    if (data.data) {
      setCachedTranslations({ ...cachedTranslations, ...{ [language]: data.data } });
    }
    setTranslations(data.data);
  };

  const t = (key, defaultValue) => {
    return translations[key] || defaultValue;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, setTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};
