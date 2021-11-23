import styled from "styled-components";
import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";
import antdBreakpoints from "../../themes/antdBreakpoints";

type Props = {
  loginData: {
    login: string;
    password: string;
  };
};

const ShowCredentialsButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.palette.scheme1.buttonGreen};
  outline: none;
  border: none;
  font-weight: 600;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0px 20px;
  border-radius: 10px;
  /* border: 1px solid #e6e6e6; */
  padding: 15px;
  background: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
  box-shadow: 0px 0px 24px -16px rgba(66, 68, 90, 0.5);
  /* color: white; */
  h4 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.2em;
  }
  .field {
    align-items: baseline;
    .field__data,
    .label {
      display: flex;
      gap: 0px 10px;
      align-items: center;
    }
    .field__data {
      @media ${antdBreakpoints.mdMax} {
        font-size: 0.9em;
      }
      font-size: 1.2em;
      font-weight: 600;
    }
    /* gap: 0px 20px; */
    display: flex;
    @media ${antdBreakpoints.mdMax} {
      flex-direction: column;
      gap: 0px 0px;
    }
    .label {
      width: 80px;
    }
  }
`;

const Credentials: FunctionComponent<Props> = ({ loginData }) => {
  const { t } = useTranslation("common");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleShowClick = () => {
    setIsFlipped(!isFlipped);
  };

  if (!isFlipped) {
    return (
      <ShowCredentialsButton onClick={handleShowClick}>
        {t("showCredentialsButton")}
      </ShowCredentialsButton>
    );
  }

  return (
    <Wrapper>
      <h4>{t("credentials")}</h4>
      <div className="field">
        <div className="label">{t("username")}:</div>
        <div className="field__data">
          {loginData.login}
          <CopyToClipboardButton textToCopy={loginData.login} />{" "}
        </div>
      </div>
      <div className="field">
        <div className="label">{t("password")}:</div>
        <div className="field__data">
          {loginData.password}{" "}
          <CopyToClipboardButton textToCopy={loginData.password} />{" "}
        </div>
      </div>
    </Wrapper>
  );
};

export default Credentials;
