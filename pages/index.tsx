import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import Layout from "../Components/Layout";
import staticPropsInitialize from "../utils/staticPropsInitialize";
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next";
import { portfolioTimelineEN, portfolioTimelinePL } from "../data/timelineData";
import TimelineContent from "../Components/Timeline/Content";
import antdBreakpoints from "../themes/antdBreakpoints";
import MoreLink from "../Components/Buttons/MoreLink";
// import Footer from "../Components/Footer";
const ENVIRONMENT = process.env.ENVIRONMENT;
const isProduction = ENVIRONMENT === "production";

const Wrapper = styled.section`
  background-color: ${({ theme }) =>
    theme.colors.palette.scheme1.pageBackground};
  flex: 0;
  display: flex;
  flex-direction: column;
  /* margin-top: calc(
    ${({ theme }) => theme.sizes.mainMenuHeight} +
      ${({ theme }) => theme.sizes.portfolioHeaderHeight}
  ); */
  height: 100%;
  .css-1oj9gcu-VerticalCircleWrapper::after {
    border-radius: 50px;
    width: 2px;
  }
  #wrapper__content {
    #chrono__header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        color: ${({ theme }) =>
          theme.colors.palette.scheme1.lightGreen}!important;
        letter-spacing: 0.1em;
        font-size: 1.5em;
        font-weight: 600;
        font-style: italic;
        text-align: center;
      }
    }
    .css-1knlz3x-TriangleIconWrapper {
      background-color: ${({ theme }) =>
        theme.colors.palette.scheme1.cardBackground};
    }
    .timeline-controls {
      background: transparent;
      li {
        button {
          color: ${({ theme }) => theme.colors.palette.scheme1.darkGreen};
        }
      }
    }

    height: 100%;
    max-width: ${({ theme }) => theme.sizes.headerWidth};

    .timeline-item-title {
      background: ${({ theme }) => theme.colors.palette.scheme1.cardBackground};
      color: ${({ theme }) => theme.colors.palette.scheme1.darkGreen}!important;
    }

    /* .timeline-item-title .active {
      background: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    } */

    .css-10xrb3z-Circle:not(.using-icon) {
      background: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
      width: 15px;
      height: 15px;
    }

    .css-10xrb3z-Circle:not(.using-icon).active::after {
      background: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
    }

    .css-10xrb3z-Circle:not(.using-icon).active {
      background: ${({ theme }) => theme.colors.palette.scheme1.pageBackground};
      width: 20px;
      height: 20px;
    }

    .timeline-main-wrapper::-webkit-scrollbar-thumb {
      border-radius: 50px !important;
    }
    .css-1ghk4q2-Circle.active::after {
      width: 8px !important;
      height: 8px !important;
    }
    .timeline-item-title {
      padding: 10px;
      border-radius: 3px;
      color: ${({ theme }) => theme.colors.palette.scheme1.cardBackground};
    }
    .active {
      color: black;
    }
    .timeline-card-content {
      background: ${({ theme }) => theme.colors.palette.scheme1.cardBackground};
      padding: 25px 35px;
      margin: 55px 0px;
      padding-top: 0px;
      border-radius: 6px;
      @media ${antdBreakpoints.mdMax} {
        padding: 10px 15px;
        width: 100%;
      }
      width: 80%;
      .emk90bu0 {
        background: ${({ theme }) =>
          theme.colors.palette.scheme1.cardBackground};
      }
      header {
        text-align: right;
        display: flex;
        flex-direction: row-reverse;
        @media ${antdBreakpoints.lgMax} {
          flex-direction: column;
        }
      }
      .card-description {
        width: 100%;
      }
      .card-sub-title {
        padding-top: 25px;
        @media ${antdBreakpoints.lgMax} {
          padding-top: 10px;
        }
        font-size: 0.9em;
        line-height: 1.5em;
        color: ${({ theme }) => theme.colors.palette.scheme1.pageBackground};
        text-transform: uppercase;
        font-weight: 900;
        opacity: 0.65;
        margin-bottom: 10px;
        /* background-color: ${({ theme }) =>
          theme.colors.palette.scheme1.green}; */
        /* display: inline-block; */
      }
      .card-title {
        line-height: 1.5em;
        @media ${antdBreakpoints.mdMax} {
          font-size: 1.3em;
          white-space: pre-line;
        }
        @media ${antdBreakpoints.lgMax} {
          white-space: pre-line;
        }
        @media ${antdBreakpoints.lg} {
          background: ${({ theme }) => theme.colors.palette.scheme1.lightGreen};
          width: fit-content;
          /* white-space: nowrap; */
          position: relative;
          margin-top: -7px;
          border-bottom-left-radius: 7px;
          border-bottom-right-radius: 7px;
          box-shadow: ${({ theme }) => theme.shadows.badge};
          &::before {
            content: "";
            display: block;
            position: absolute;
            /* width: 10px; */
            /* height: 10px; */
            left: -7px;
            top: 0;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 7px 7px;
            border-color: transparent transparent
              ${({ theme }) => theme.colors.palette.scheme1.mediumGreen}
              transparent;
          }
          margin-bottom: 25px;
        }
        padding: 10px 20px;
        display: flex;
        /* text-align: right; */
        font-size: 1.3em;
        color: ${({ theme }) => theme.colors.palette.scheme1.textGreen};
        font-weight: 700;
        text-align: end;
        text-transform: uppercase;
      }
    }
  }
`;

const CommissionSystemsWeb = () => {
  const {
    i18n: { language },
  } = useTranslation("common");
  const url = "https://calcaider.com";

  const imageUrl = "/images/commissionweb.jpg";
  const gitUrl = "https://github.com/Jacaplaca/Commissions_calc_website";

  if (language === "pl") {
    return (
      <TimelineContent
        url={url}
        // loginData={loginData}
        imageUrl={imageUrl}
        gitUrl={gitUrl}
      ></TimelineContent>
    );
  }
  return (
    <TimelineContent
      url={url}
      // loginData={loginData}
      imageUrl={imageUrl}
      gitUrl={gitUrl}
    ></TimelineContent>
  );
};

const CommissionSystemsApp = () => {
  const {
    i18n: { language },
  } = useTranslation("common");
  const url = "https://app.calcaider.com";
  const loginData = {
    login: "demo1@calcaider.com",
    password: "Brelaka343",
  };
  // const gitUrl = "https://example.pl";
  const link = "https://calcaider.com";
  const imageUrl = "/images/caapp.jpg";

  if (language === "pl") {
    return (
      <TimelineContent
        url={url}
        loginData={loginData}
        imageUrl={imageUrl}
        // gitUrl={gitUrl}
      >
        Aplikacja do tworzenie system??w prowizyjnych dla mi??dzy innymi
        przedstawicieli handlowych.
        <div className="children__more">
          <MoreLink moreText="Wi??cej informacji" link={link} />
        </div>
      </TimelineContent>
    );
  }
  return (
    <TimelineContent
      url={url}
      loginData={loginData}
      imageUrl={imageUrl}
      // gitUrl={gitUrl}
    >
      Application for creating commission systems for sales representatives.
      <div className="children__more">
        <MoreLink moreText="More information" link={link} />
      </div>
    </TimelineContent>
  );
};

const Ecomm = () => {
  const {
    i18n: { language },
  } = useTranslation("common");
  const url = "https://ecomm.dziewanowski.pl";
  const loginData = null;
  const imageUrl = "/images/ecomm.jpg";

  // const gitUrl = "https://shooterstats.dziewanowski.pl";

  if (language === "pl") {
    return (
      <TimelineContent
        url={url}
        loginData={loginData}
        imageUrl={imageUrl}
        // gitUrl={gitUrl}
      >
        Zarz??dzanie tre??ci??, dodawanie produkt??w, tworzenie promocji.
        Rejestracja klient??w.
      </TimelineContent>
    );
  }
  return (
    <TimelineContent
      url={url}
      loginData={loginData}
      imageUrl={imageUrl}
      // gitUrl={gitUrl}
    >
      Content management, adding products, creating promotions. Customer
      registration.
    </TimelineContent>
  );
};

const Costs = () => {
  const {
    i18n: { language },
  } = useTranslation("common");
  const url = "https://costs.dziewanowski.pl";
  const loginData = {
    login: "app@dziewanowski.pl",
    password: "mypass",
  };
  const imageUrl = "/images/costs.jpg";
  const gitUrl = "https://shooterstats.dziewanowski.pl";

  if (language === "pl") {
    return (
      <TimelineContent
        url={url}
        loginData={loginData}
        imageUrl={imageUrl}
        // gitUrl={gitUrl}
      >
        Aplikacja maj??ca za zadanie zapisa??, porz??dkowa?? i klasyfikowa?? koszty z
        dok??adno??ci?? do pracownia. Pracownik obs??uguj??cy aplikacj?? dodaje do
        niej faktur?? i wybiera odpowiednie kategorie kosztu. Na tej podstawie
        hurtownia danych ocenia realn?? wydajno???? zespo????w handlowych i
        poszczeg??lnych handlowc??w a tak??e mar??e jakie generuj?? dla firmy.
        Aplikacja pomaga r??wnie?? dyrektorowi handlowemu tworzy?? plany dla
        handlowc??w.
      </TimelineContent>
    );
  }
  return (
    <TimelineContent
      url={url}
      loginData={loginData}
      imageUrl={imageUrl}
      // gitUrl={gitUrl}
    >
      An application designed to record, organize and classify costs with the
      accuracy of the employee. The employee running the application adds an
      invoice to it and selects the appropriate cost categories. On this basis,
      the data warehouse evaluates the real performance of sales teams and
      individual traders and the margins they generate for the company. The app
      also helps the sales director create plans for salespeople.
    </TimelineContent>
  );
};

const Pollster = () => {
  const {
    i18n: { language },
  } = useTranslation("common");
  const url = "https://survey.dziewanowski.pl";
  const loginData = {
    login: "dziewanowski@gmail.com",
    password: "aaaaaa",
  };
  const imageUrl = "/images/survey.jpg";
  const gitUrl = "https://shooterstats.dziewanowski.pl";

  if (language === "pl") {
    return (
      <TimelineContent
        url={url}
        loginData={loginData}
        imageUrl={imageUrl}
        // gitUrl={gitUrl}
      >
        Aplikacja dla du??ej drukarni do wysy??ania tr??jj??zycznych ankiet do
        klient??w, zbierania i analizowania wynik??w. Firma co roku wysy??a oko??o
        1000 ankiet do jej rozsianych po ca??ej Europie klient??w. Do klient??w
        wysy??ane s?? masowe emaile z indywidualnym linkiem do ankiety, kt??ry
        wygasa po wype??nieniu. Po wype??nieniu ankiety wyniki zapisywane s?? w
        bazie danych. Odpowiedzi na ka??de z pyta?? przyporz??dkowana jest ocena.
        Suma ocen oraz ??rednia daj?? firmie obraz jakie obszary obs??ugi klienta,
        produkcji czy logistyki s?? do poprawy i jak zmieni??y si?? oceny
        poszczeg??lnych kwestii w por??wnaniu do wcze??niejszych lat.
      </TimelineContent>
    );
  }
  return (
    <TimelineContent
      url={url}
      loginData={loginData}
      imageUrl={imageUrl}
      // gitUrl={gitUrl}
    >
      Application for a large printing company to send three lingual surveys to
      customers, collect and analyze results. Every year the company sends about
      1000 surveys to its customers spread all over Europe. Customers are sent
      mass emails with an individual link to the survey, which expires after
      completion. After completing the survey, the results are stored in a
      database. The answers to each question are assigned a grade. The sum of
      the ratings and the average gives the company a picture of which areas of
      customer service, production or logistics need improvement and how the
      ratings of the individual issues have changed compared to previous years.
    </TimelineContent>
  );
};

const SwiadomaWeb = () => {
  const {
    i18n: { language },
  } = useTranslation("common");
  const url = "https://swiadomafirma.pl";

  const imageUrl = "/images/swiadoma.jpg";
  const gitUrl = "https://okna.dziewanowski.pl";

  if (language === "pl") {
    return (
      <TimelineContent
        url={url}
        // loginData={loginData}
        imageUrl={imageUrl}
        // gitUrl={gitUrl}
      ></TimelineContent>
    );
  }
  return (
    <TimelineContent
      url={url}
      // loginData={loginData}
      imageUrl={imageUrl}
      // gitUrl={gitUrl}
    ></TimelineContent>
  );
};

const WindowWebsite = () => {
  const {
    i18n: { language },
  } = useTranslation("common");
  const url = "https://okna.dziewanowski.pl";

  const imageUrl = "/images/okna.jpg";
  const gitUrl = "https://okna.dziewanowski.pl";

  if (language === "pl") {
    return (
      <TimelineContent
        url={url}
        // loginData={loginData}
        imageUrl={imageUrl}
        // gitUrl={gitUrl}
      ></TimelineContent>
    );
  }
  return (
    <TimelineContent
      url={url}
      // loginData={loginData}
      imageUrl={imageUrl}
      // gitUrl={gitUrl}
    ></TimelineContent>
  );
};

const Shooter = () => {
  const {
    i18n: { language },
  } = useTranslation("common");
  const url = "https://shooterstats.dziewanowski.pl";
  const loginData = {
    login: "marguerite.maggio@ethereal.email",
    password: "aleratem",
  };
  const imageUrl = "/images/shooterstats.jpg";
  const gitUrl = "https://shooterstats.dziewanowski.pl";

  if (language === "pl") {
    return (
      <TimelineContent
        url={url}
        loginData={loginData}
        imageUrl={imageUrl}
        // gitUrl={gitUrl}
      >
        W??a??ciciel zak??ada konta organizatorom, ci z kolei dodaj?? zawodnik??w,
        zawody i konkurencje. System generuje pdf tzw. metryczki, kt??re
        wype??niaj?? s??dziowie na stanowiskach strzeleckich, kt??re z kt??rych
        wyniki s?? dodawanie do sytemu. Uczestnicy na ??ywo mog?? obserwowa?? tabele
        wynik??w. System generuj?? raporty w pdf to rozwieszenia na tablicach.
        System obs??u??y?? do tej porty kilkadziesi??t zawod??w, w kt??rych
        uczestniczy??o kilka tysi??cy zawodnik??w.
      </TimelineContent>
    );
  }
  return (
    <TimelineContent
      url={url}
      loginData={loginData}
      imageUrl={imageUrl}
      // gitUrl={gitUrl}
    >
      The owner creates accounts for organizers, who in turn add competitors,
      events and competitions. The system generates pdfs of metrics filled out
      by judges at the shooting locations, which results are added to the
      system. Participants can watch the live scoreboard. The system generates
      reports in pdf format to be hung on the boards. The system has so far
      supported dozens of competitions in which several thousand competitors
      participated.
    </TimelineContent>
  );
};

const Django = () => {
  const {
    i18n: { language },
  } = useTranslation("common");

  if (language === "pl") {
    return (
      <div>
        Dzia??anie programu polega??o na nauczeniu handlowc??w nawyku planowania.
        Na pocz??tku ka??dego tygodnia pracownik planowa?? reszt?? tygodnia,
        wybiera?? dni, czynno??ci, klient??w. Po wykonaniu czynno??ci raportowa??
        wynik lub przebieg wydarzenia lub dodawa?? komentarz.
      </div>
    );
  }
  return (
    <div>
      The main purpose of the program was to teach sales reps the habit of
      planning. At the beginning of each week, the employee would plan the rest
      of the week, choose days, activities, customers. After the activity, he
      reported the result or the course of the event or added a comment.
    </div>
  );
};

const ChronoContainer = styled.div`
  width: 100vw;
  height: calc(
    100vh - ${({ theme }) => theme.sizes.mainMenuHeight} -
      ${({ theme }) => theme.sizes.portfolioHeaderHeight}
  );
  #chrono__header {
    height: ${({ theme }) => theme.sizes.portfolioHeaderHeight};
  }
`;

const Home: NextPage = () => {
  const theme = useTheme();
  const {
    t,
    i18n: { language },
  } = useTranslation("common");
  return (
    <Layout backgroundColor={theme.colors.palette.scheme1.lightGreen}>
      <Wrapper>
        {/* <Head>alkdsjflaskdf</Head> */}
        <div id="wrapper__content">
          <ChronoContainer>
            <div id="chrono__header">
              <h1>{t("portfolio.title")}</h1>
            </div>
            <Chrono
              mode="VERTICAL"
              useReadMore={false}
              // @ts-ignore:next-line example is ok according to documentation but typescript complains
              items={
                language === "en" ? portfolioTimelineEN : portfolioTimelinePL
              }
              // cardHeight={250}
              scrollable
              hideControls={true}
              theme={{
                primary: theme.colors.palette.scheme1.lightGreen,
                secondary: theme.colors.palette.scheme1.pageBackground,
                cardBgColor: "white",
                cardForeColor: theme.colors.palette.scheme1.black,
                titleColor: theme.colors.palette.scheme1.black,
              }}
            >
              <CommissionSystemsWeb />
              <CommissionSystemsApp />
              <Ecomm />
              <Costs />
              <Pollster />
              <SwiadomaWeb />
              <WindowWebsite />
              <Shooter />
              <Django />
            </Chrono>
          </ChronoContainer>
        </div>
      </Wrapper>
      {/* <Footer /> */}
    </Layout>
  );
};

export const getServerSideProps = staticPropsInitialize;

export default Home;
