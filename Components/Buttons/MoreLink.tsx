import { FunctionComponent } from "react";
import styled from "styled-components";
import { LongArrowRightAlt } from "../Icons";

type Props = {
  moreText: string;
  link: string;
};

const MoreLinkStyled = styled.div`
  .link {
    a {
      display: flex;
      color: ${({ theme }) => theme.colors.text.dark}!important;
      gap: 0 5px;
      font-size: 0.9em;
      font-weight: bold;
      opacity: 0.76;
      &:hover {
        opacity: 0.9;
      }
      &:hover .arrow {
        transform: translateX(7px);
      }
      .arrow {
        transition: all 0.2s;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const Arrow = styled(LongArrowRightAlt)`
  font-size: 1.6em !important ;
`;

const MoreLink: FunctionComponent<Props> = ({ moreText, link }) => {
  return (
    <MoreLinkStyled>
      <div className="link">
        <a href={link}>
          {moreText}
          <div className="arrow">
            <Arrow />
          </div>
        </a>
      </div>
    </MoreLinkStyled>
  );
};

export default MoreLink;
