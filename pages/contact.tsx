import styled, { useTheme } from "styled-components";
import Layout from "../Components/Layout";
import { FunctionComponent } from "react";
import staticPropsInitialize from "../utils/staticPropsInitialize";

import { useTranslation } from "react-i18next";
import ContactForm from "../Components/Contact/form";
import antdBreakpoints from "../themes/antdBreakpoints";

type Props = {};
const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.palette.scheme1.pageBackground};
  padding: 30px 0;
  @media ${antdBreakpoints.lgMax} {
    padding: 30px 30px;
  }
  flex: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  .title {
    font-size: 1.7em;
    padding: 20px 0;
    margin-bottom: 20px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    /* opacity: 0.3; */
  }
  .form {
    width: 300px;
  }
  .content {
    display: flex;
    .contact__column1,
    .contact__column2 {
      width: 50%;
    }
    @media ${antdBreakpoints.lgMax} {
      width: 100%;
    }
    @media ${antdBreakpoints.mdMax} {
      flex-direction: column;
      width: 100%;
      gap: 25px 25px;
      .contact__column1,
      .contact__column2 {
        width: 100%;
      }
    }
    gap: 0 25px;
    width: ${({ theme }) => theme.sizes.pageWidth};
  }
`;

const ContactPage: FunctionComponent<Props> = () => {
  const { t, i18n } = useTranslation("common");
  const theme = useTheme();

  return (
    <Layout backgroundColor={theme.colors.palette.scheme1.lightGreen}>
      <Wrapper>
        <h2 className="title">{t("contactTitle")}</h2>
        <div className="form">
          <ContactForm />
        </div>
      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps = staticPropsInitialize;
export default ContactPage;
