import styled from "styled-components";
import { FunctionComponent } from "react";
import { transparentize } from "polished";
import antdBreakpoints from "../../themes/antdBreakpoints";

const StartButton = styled.button`
  /* width: 140px; */
  /* height: 45px; */
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  background: ${({ theme }) => theme.colors.palette.scheme1.buttonGreen};
  /* color: ${({ theme }) => theme.colors.text.dark}; */
  color: ${({ theme }) => theme.colors.palette.scheme1.cardBackground};
  padding: 15px 25px;
  @media ${antdBreakpoints.mdMax} {
    padding: 10px 15px;
  }

  font-weight: 600;
  a {
    color: white;
  }

  &:hover {
    /* background: darkred; */
    /* box-shadow: 0px 15px 20px
      ${({ theme }) => transparentize(0.6, theme.colors.palette.red.main)};
    color: #fff; */
    transform: translateY(-5px);
    opacity: 0.9;
    a {
      color: ${({ theme }) => theme.colors.text.dark};
    }
  }
  &:active {
    transform: translateY(0px) scale(0.95);
  }
`;

type RiseButtonProps = {
  onClick?: (e: any) => void;
};

const RiseButton: FunctionComponent<RiseButtonProps> = ({
  children,
  onClick,
}) => {
  return <StartButton>{children}</StartButton>;
};

export default RiseButton;
