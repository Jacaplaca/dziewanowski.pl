import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import SubMenu from "./MainMenu/SubMenu";
import CasesSubMenu from "./MainMenu/CasesSubMenu";
import LanguageSwitcher from "./MainMenu/LanguageSwitcher";

const useMainMenuElements = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("common");
  const [featuresOpened, setFeaturesOpened] = useState<number>(0);

  const closeSubMenu = () => {
    setFeaturesOpened(0);
  };

  const toggler = (key: number) => {
    if (featuresOpened === key) {
      setFeaturesOpened(0);
    } else {
      setFeaturesOpened(key);
    }
  };

  const elements = [
    {
      label: language,
      key: 4,
      action: () => toggler(4),
      SubMenu: <LanguageSwitcher />,
    },
  ];

  return { elements, featuresOpened, closeSubMenu };
};

export default useMainMenuElements;
