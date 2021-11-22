import { useTranslation } from "next-i18next";
import { useState } from "react";
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
      label: "dziewanowski.pl",
      key: 0,
      // action: () => toggler(4),
      // SubMenu: <LanguageSwitcher />,
      centerSubMenu: false,
      link: "/",
    },
    {
      label: t("contact"),
      key: 1,
      // action: () => toggler(4),
      // SubMenu: <LanguageSwitcher />,
      centerSubMenu: false,
      link: "/contact",
    },
    {
      label: t("aboutMe"),
      key: 2,
      // action: () => toggler(4),
      // SubMenu: <LanguageSwitcher />,
      centerSubMenu: false,
      link: "/about",
    },
    {
      label: language,
      key: 4,
      action: () => toggler(4),
      SubMenu: <LanguageSwitcher />,
      centerSubMenu: false,
      link: undefined,
    },
  ];

  return { elements, featuresOpened, closeSubMenu };
};

export default useMainMenuElements;
