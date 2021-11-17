import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { cloneElement, FunctionComponent } from "react";
import Link from "next/link";
import { AngleDownRegular } from "../../Icons";
// import SubMenu from "./SubMenu";
import SubMenuWrapper from "./SubMenu/Wrapper";
import dynamic from "next/dynamic";
import LanguageSwitcher from "./LanguageSwitcher";
import { PortalProps } from "../../Portal";

const Portal = dynamic<PortalProps>(
  () => import("../../Portal").then((module) => module),
  {
    ssr: false,
  }
);

const ButtonWrapper = styled.button`
  position: relative;
  cursor: pointer;
  outline: none;
  border: none;
  height: 40px;
  display: flex;
  align-items: center;
  background: transparent;
  transition: all 0.27s ease-in;
  /* border: 1px solid ${({ theme }) => "transparent"}; */
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.palette.scheme1.yellow};
  }

  .under {
    position: absolute;
    top: 50px;
    z-index: 1;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    padding: 0 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.midDarkBlue};
    gap: 0 5px;
    color: white;
  }

  /* display: flex; */
`;

type Props = {
  label: string;
  link?: string;
  action?: () => void;
  clicked: boolean;
  SubMenu?: JSX.Element;
  centerSubMenu?: boolean;
};

const Icon = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
  // margin-top: -10px !important;
  transform: rotate(${({ rotate }) => rotate}deg) !important;
  font-size: 1em !important;
  transition: transform 0.2s ease-in-out !important;
  transform-origin: center center;
`;

const MainMenuButton: FunctionComponent<Props> = ({
  label,
  link,
  action,
  clicked,
  SubMenu,
  centerSubMenu,
}) => {
  if (link) {
    return (
      <Link href={link}>
        <a>
          <ButtonWrapper>
            <div className="label">{label}</div>
          </ButtonWrapper>
        </a>
      </Link>
    );
  }
  if (action && centerSubMenu) {
    return (
      <ButtonWrapper onClick={action}>
        <AnimatePresence>
          <Portal portalId="portal_subMenu">
            {clicked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SubMenuWrapper>{SubMenu}</SubMenuWrapper>
              </motion.div>
            )}
          </Portal>
        </AnimatePresence>

        <div className="label">
          <div>{label}</div>
          <Icon component={<AngleDownRegular />} rotate={clicked ? 180 : 0} />
        </div>
      </ButtonWrapper>
    );
  }
  if (action && !centerSubMenu) {
    return (
      <ButtonWrapper onClick={action}>
        <div className="under">
          <AnimatePresence>
            {clicked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <LanguageSwitcher />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="label">
          <div>{label}</div>
          <Icon component={<AngleDownRegular />} rotate={clicked ? 180 : 0} />
        </div>
      </ButtonWrapper>
    );
  }
  return null;
};

export default MainMenuButton;
