import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import locales from "../../data/locale";

const useMainStore = () => {
  const [background, setBackground] = useState("#ffffff");
  const [locale, setLocale] = useState("en-US");
  const {
    i18n: { language },
  } = useTranslation();

  const updateBackground = (color: string) => {
    setBackground(color);
  };

  useEffect(() => {
    const locale = locales?.[language];
    setLocale(locale);
  }, [language]);

  return { background, updateBackground, locale };
};

export default useMainStore;
