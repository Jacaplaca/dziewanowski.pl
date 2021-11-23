import styled from "styled-components";
import { FunctionComponent } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import RiseButton from "../Buttons/RiseButton";
import { GithubBrands } from "../Icons";
import antdBreakpoints from "../../themes/antdBreakpoints";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";
import Credentials from "./Credentials";

type Props = {
  url?: string;
  loginData?: { login: string; password: string } | null;
  imageUrl?: string;
  gitUrl?: string;
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  #content {
    #children {
      display: flex;
      flex-direction: column;
      .children__more {
        margin-left: auto;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
          color: black;
        }
        a:link {
          color: black;
        }
        a:visited {
          color: black;
        }
        a:hover {
          color: black;
        }
        a:focus {
          color: black;
        }
        a:active {
          color: black;
        }
      }
    }
    width: 100%;
    padding: 10px 0px;
    display: flex;
    gap: 0px 80px;
    @media ${antdBreakpoints.xlMax} {
      flex-direction: column;
      gap: 15px 0px;
    }
    img {
      max-width: 400px;
      height: fit-content;
      border-radius: 10px;
      box-shadow: ${({ theme }) => theme.shadows.subMenu};
    }
  }
  #footer {
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
    align-items: flex-end;
    @media ${antdBreakpoints.xlMax} {
      flex-direction: column;
      gap: 15px 0px;
    }
    #redirect {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-end;
      #git {
        display: flex;
        outline: none;
        border: none;
        background: none;
        width: fit-content;
        cursor: pointer;
        gap: 5px;
        justify-content: center;
        align-items: center;
        font-size: 1.4em;
        font-weight: 600;
        opacity: 0.7;
        &:hover {
          opacity: 0.9;
          a {
            color: black;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const TimelineContent: FunctionComponent<Props> = ({
  children,
  url,
  loginData,
  imageUrl,
  gitUrl,
}) => {
  const { t, i18n } = useTranslation("common");
  return (
    <Wrapper>
      <div id="content">
        {imageUrl && <img src={imageUrl} />}
        <div id="children"> {children}</div>
      </div>
      <div id="footer">
        {loginData ? <Credentials loginData={loginData} /> : <div />}
        <div id="redirect">
          {gitUrl && (
            <button id="git">
              <GithubBrands />
              <Link href={gitUrl}>
                <a>{t("github")}</a>
              </Link>
            </button>
          )}
          {url && (
            <Link href={url}>
              <a target="_blank">
                <RiseButton>{t("goToApp")}</RiseButton>
              </a>
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default TimelineContent;
