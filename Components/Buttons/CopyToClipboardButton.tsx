import styled from "styled-components";
import { FunctionComponent } from "react";
import { CloneSolid } from "../Icons";

type Props = { textToCopy: string };
const Wrapper = styled.button`
  display: flex;
  outline: none;
  border: none;
  cursor: pointer;
  background: none;
`;

const CloneSolidStyled = styled(CloneSolid)`
  font-size: 1em !important;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`;

const CopyToClipboardButton: FunctionComponent<Props> = ({ textToCopy }) => {
  return (
    <Wrapper
      onClick={() => {
        navigator.clipboard.writeText(textToCopy);
      }}
    >
      <CloneSolidStyled />
    </Wrapper>
  );
};

export default CopyToClipboardButton;
