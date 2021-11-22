import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import MainMenu from "../../Navigations/MainMenu";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import MainMenuMobile from "../../Navigations/MainMenuMobile";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  flex: 0;
  width: 100%;
  position: relative;
  /* height: calc(
    ${({ theme }) => theme.sizes.mainMenuHeight} +
      ${({ theme }) => theme.sizes.portfolioHeaderHeight}
  ); */
  background: ${({ theme }) => theme.colors.palette.scheme1.pageBackground};
  .content {
    display: flex;
    justify-content: space-between;
    /* max-width: 100vh; */
    /* padding: 0 10px; */
    flex: 0;
    width: 100%;
  }
`;

const PortalStyled = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 65px;
  z-index: 2;
`;

const Header: FunctionComponent<Props> = ({}) => {
  const screen = useBreakpoint();
  return (
    <Wrapper>
      <div className="content">{screen.lg ? <MainMenu /> : <MainMenu />}</div>
      <PortalStyled id="portal_subMenu" />
    </Wrapper>
  );
};

export default Header;
