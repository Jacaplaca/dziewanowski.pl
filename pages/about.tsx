import styled, { useTheme } from "styled-components";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../Components/Layout";
import staticPropsInitialize from "../utils/staticPropsInitialize";
import antdBreakpoints from "../themes/antdBreakpoints";

type Props = {};
const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.palette.scheme1.pageBackground};
  p {
    color: ${({ theme }) => theme.colors.text.light};
    font-size: 0.93em;
  }
  h2 {
    color: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    font-size: 2em;
    font-weight: bold;
    padding: 20px 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  #about-content {
    @media ${antdBreakpoints.mdMax} {
      flex-direction: column;
      gap: 30px 15px;
    }
    gap: 0px 40px;
    flex-direction: row;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    #about-content__description {
      width: 50%;
      @media ${antdBreakpoints.mdMax} {
        width: 100%;
        padding: 10px 15px;
      }
    }
    img {
      border-radius: 50%;
      width: 200px;
      border: 7px solid
        ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    }
  }
`;

const EnglishDesc = () => {
  return (
    <div id="about-content__description">
      <p>
        Full-stack developer. I can create applications from scratch. I use
        modern tools such as backend I code in Node Js. Although I sometimes
        program in Python as well. Daily I deal with NoSQL databases, mainly
        MongoDB, but I also write applications based on MySQL.
      </p>
      <p>
        The front end is mostly React JS. Before I got to know React, I was
        using Jquery. For a while, I was also programming in Django. Currently,
        I code my projects mainly in NextJs, because of its powerful rendering
        capabilities on the server. I also have a few pages written in Gatsby.
      </p>
      <p>
        In my free time, I develop my knowledge about blockchain to combine my
        full-stack experience with blockchain one day and be ready for web 3.0.
      </p>
    </div>
  );
};

const PolishDesc = () => {
  return (
    <div id="about-content__description">
      <p>
        Full-stack developer. Jestem w stanie tworzyć aplikacje od podstaw.
        Wykorzystuję nowoczesne narzędzia np. backend koduję w Node Js. Chociaż
        zdarzało mi się programować również w Pythonie. Na co dzień mam do
        czynienia z bazami danych NoSQL, głównie MongoDB, ale napisałem również
        kilka aplikacji opartych o MySQL.
      </p>
      <p>
        Front-end to głównie React JS. Zanim poznałem Reacta, korzystałem z
        Jquery. Chwilkę programowałem również w Django. Obecnie projekty piszę
        głównie w NextJs, ze względu na jego rozbudowane możliwości renderowania
        na serwerze. Mam też kilka stron napisanych w Gatsby.{" "}
      </p>
      <p>
        W wolnych chwilach rozwijam swoją wiedzę na temat blockchain aby kiedyś
        móc połączyć doświadczenie full-stack właśnie z blockchainem i być
        przygotowanym na web 3.0.
      </p>
    </div>
  );
};

const About: FunctionComponent<Props> = ({}) => {
  const {
    t,
    i18n: { language },
  } = useTranslation("common");
  const theme = useTheme();

  return (
    <Layout backgroundColor={theme.colors.palette.scheme1.lightGreen}>
      <Wrapper>
        <h2>{t("about.title")}</h2>
        <div id="about-content">
          <div id="about-content__image">
            <img src="/images/me.jpg" alt="" />
          </div>
          {language === "en" ? EnglishDesc() : PolishDesc()}
        </div>
      </Wrapper>
    </Layout>
  );
};
export const getServerSideProps = staticPropsInitialize;
export default About;
