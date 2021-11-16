import styled from "styled-components";
import { FunctionComponent, useState } from "react";
import MainMenuButton from "./MainMenuButton";
import MainNavigationBigButton from "../../Buttons/MainNavigationBigButton";
import { useTranslation } from "react-i18next";
import SubMenu from "./SubMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import CasesSubMenu from "./CasesSubMenu";
import useMainMenuElements from "../useMainMenuElements";

type Props = {};
const Row = styled.section`
  display: flex;
  justify-content: flex-start;
  position: relative;
`;

const Menu = styled.div`
  display: flex;
`;

const MainMenu: FunctionComponent<Props> = ({}) => {
  const { elements, featuresOpened } = useMainMenuElements();
  const {
    t,
    i18n: { language },
  } = useTranslation("common");

  return (
    <Row>
      <Menu>
        {elements.map((element) => {
          const { label, key, link, action, SubMenu, centerSubMenu } = element;
          return (
            <MainMenuButton
              label={label}
              key={key}
              link={link}
              action={action}
              clicked={featuresOpened === key}
              SubMenu={SubMenu}
              centerSubMenu={centerSubMenu}
            />
          );
        })}
      </Menu>
    </Row>
  );
};

export default MainMenu;
