import styled from "styled-components";
import { FunctionComponent, useEffect, useState } from "react";
import { CloneSolid } from "../Icons";
import CheckboxAnimated from "../Icons/CheckboxAnimated";

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
  opacity: 1;
  color: ${({ theme }) => theme.colors.palette.scheme1.textGreen};
  &:hover {
    opacity: 0.8;
  }
`;

const CopyToClipboardButton: FunctionComponent<Props> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 10000);
    }
  }, [copied]);

  const handleCopyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <Wrapper onClick={handleCopyToClipboard}>
      {copied ? <CheckboxAnimated /> : <CloneSolidStyled />}
    </Wrapper>
  );
};

export default CopyToClipboardButton;
