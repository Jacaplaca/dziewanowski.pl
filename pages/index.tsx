import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import Layout from "../Components/Layout";
import staticPropsInitialize from "../utils/staticPropsInitialize";
import { Chrono } from "react-chrono";
import timelineData from "../data/timelineData";

const Wrapper = styled.section`
  flex: 0;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  #wrapper__content {
    height: 100%;
    max-width: ${({ theme }) => theme.sizes.headerWidth};

    /* padding-top: 30px; */
    .timeline-main-wrapper::-webkit-scrollbar-thumb {
      border-radius: 50px !important;
      /* width: 80%; */
    }
    .css-1ghk4q2-Circle.active::after {
      width: 8px !important;
      height: 8px !important;
    }
    .timeline-item-title {
      padding: 10px;
      border-radius: 15px;
    }
    .timeline-card-content {
      padding: 25px 35px;
      /* margin: 0; */
      /* display: none; */
      border-radius: 20px;
      width: 80%;
      .card-description {
        width: 100%;
      }
      .card-title {
        color: ${({ theme }) => theme.colors.palette.scheme1.black};
      }
    }
  }
`;

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Layout backgroundColor={theme.colors.palette.indexBackground}>
      <Wrapper>
        <div id="wrapper__content">
          <div style={{ width: "100vw", height: "100vh" }}>
            <Chrono
              items={timelineData}
              mode="VERTICAL"
              cardHeight={250}
              scrollable
              theme={{
                primary: theme.colors.palette.scheme1.green,
                secondary: theme.colors.palette.scheme1.yellow,
                cardBgColor: "white",
                cardForeColor: theme.colors.palette.scheme1.black,
                titleColor: theme.colors.palette.scheme1.black,
              }}
            />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps = staticPropsInitialize;

export default Home;
