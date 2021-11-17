import styled from "styled-components";
import { FunctionComponent, useEffect } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import usePrevious from "../../hooks/usePrevious";
import { useMainContext } from "../../contexts/main";
import Footer from "../Footer";
import Head from "next/head";
import { useTranslation } from "react-i18next";
const appName = process.env.NEXT_PUBLIC_APPNAME;

type Props = {
  backgroundColor: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  seoMore?: string;
};

const Wrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 100%;
  align-items: center;
  flex: 0;
  height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.colors.palette.scheme1.pageBackground}; ;
`;

const Container = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Layout: FunctionComponent<Props> = ({
  children,
  backgroundColor,
  seoTitle,
  seoKeywords,
  seoDescription,
  seoMore,
}) => {
  const { t } = useTranslation(["common", "subMenu"]);
  const { background, updateBackground } = useMainContext();
  const prevBackground = usePrevious(background);

  useEffect(() => {
    updateBackground(backgroundColor);
  }, [backgroundColor, updateBackground]);

  const variants = {
    hidden: { opacity: 0, x: 0, y: -10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -10 },
  };

  return (
    <Wrapper
      animate={{ background: [prevBackground, backgroundColor] }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>{`${t(seoTitle || "")}` || appName}</title>
        <meta name="keywords" content={seoKeywords || ""} />
        <meta
          name="description"
          content={`${t(seoDescription || "")} | ${t(seoMore || "")}`}
        />
      </Head>
      <Header />
      <Container
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
      >
        {children}
      </Container>
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default Layout;
